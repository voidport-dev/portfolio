import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import TSIcon from "@assets/typescript.svg?react";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  logo?: string;
  badges: string[];
  isTypescript: boolean;
  dates: string;
  duration: string;
  company?: string;
  companyUrl?: string;
  employmentType: string;
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-800 rounded-md md:px-2 md:py-1 px-1 py-0.5 text-sm md:text-base">
    {children}
  </span>
);

const ProjectCard = ({
  title,
  description,
  images,
  logo,
  badges,
  isTypescript,
  dates,
  duration,
  company,
  companyUrl,
  employmentType,
}: ProjectCardProps) => {
  const outsideRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      ref={outsideRef}
      onClick={(e) => {
        if (e.target === outsideRef.current) {
          closeModal();
        }
      }}
    >
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="flex items-start lg:items-center justify-between px-4 md:8 lg:16 xl:px-24 2xl:px-48 gap-4 w-full lg:flex-row flex-col">
          <div className="flex items-start justify-center gap-4">
            {logo && (
              <img src={logo} alt={title} className="w-10 h-10 rounded-md" />
            )}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    {company && (
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:cursor-pointer hover:opacity-80"
                      >
                        {company}
                      </a>
                    )}
                    <p className="text-gray-400">{employmentType}</p>
                  </div>
                  <div className="flex md:flex-row flex-col md:items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                    <p className="text-gray-400">
                      {dates} ({duration})
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {isTypescript && <TSIcon className="w-4 h-4 rounded-sm" />}
                {badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper w-80 h-40"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                    alt={`${title} project image ${index + 1}`}
                    onClick={() => openModal(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blue bg-opacity-75 flex items-center justify-center z-50"
          onKeyDown={handleKeyDown}
          onClick={handleModalClick}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10"
            >
              <XIcon />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
            >
              <ArrowLeftIcon />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
            >
              <ArrowRightIcon />
            </button>

            <img
              src={images[selectedImageIndex]}
              className="max-w-full max-h-full object-contain rounded-lg"
              alt={`${title} project image ${selectedImageIndex + 1}`}
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
