#!/bin/bash

for file in *.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -e "$file" ] || continue
  
  # Use ffprobe to get real resolution (more reliable than ffmpeg)
  dimensions=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$file" 2>/dev/null)
  if [ -n "$dimensions" ]; then
    width=$(echo "$dimensions" | cut -d'x' -f1)
    height=$(echo "$dimensions" | cut -d'x' -f2)
  else
    # Fallback to ffmpeg method
    dimensions=$(ffmpeg -i "$file" -f null - 2>&1 | grep -o '[0-9]\+x[0-9]\+' | head -n1)
    width=$(echo "$dimensions" | cut -d'x' -f1)
    height=$(echo "$dimensions" | cut -d'x' -f2)
  fi
  
  echo "  Dimensions: ${width}x${height}"
  
  if (( height > width )); then
    # Get base filename without extension
    base="${file%.*}"
    # Create backup filename with .old.png extension
    backup="${base}.old.png"
    # Output will use original filename
    output="$file"
    
    echo "Processing vertical image: $file"
    echo "  Creating backup: $backup"
    echo "  Output: $output"
    
    # Create the horizontal version with blur background
    ffmpeg -y -i "$file" -lavfi "
      [0:v]scale=1920:1080:force_original_aspect_ratio=decrease,format=rgba,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=black[fg];
      [0:v]scale=1920:1080,boxblur=luma_radius=20:luma_power=1[bg];
      [bg][fg]overlay=format=auto
    " temp_output.png
    
    # Check if ffmpeg succeeded
    if [ $? -eq 0 ]; then
      # Rename original to backup
      mv "$file" "$backup"
      # Move processed image to original filename
      mv temp_output.png "$output"
      echo "  ✓ Converted successfully"
    else
      echo "  ✗ Error processing $file"
      # Clean up temporary file if it exists
      [ -f temp_output.png ] && rm temp_output.png
    fi
  else
    echo "Skipping horizontal image: $file"
  fi
done

echo "Processing complete!"