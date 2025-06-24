type ImageModule = {
  default: string;
};

const allImageModules = import.meta.glob(
  "@/assets/images/**/*.{png,jpg,jpeg}",
  { eager: true }
);

function getImagesByFolder(folderName: string): string[] {
  return Object.entries(allImageModules)
    .filter(([path]) => path.includes(`/${folderName}/`))
    .map(([, module]) => (module as ImageModule).default)
    .sort();
}

const FLINT_IMAGES: string[] = getImagesByFolder("flint");
const DUCK_WALLET_IMAGES: string[] = getImagesByFolder("duck-wallet");
const FLAPPY_DUCK_IMAGES: string[] = getImagesByFolder("flappy-duck");
const GUIDER_IMAGES: string[] = getImagesByFolder("guider");
const ZGC_IMAGES: string[] = getImagesByFolder("zgc");
const FREELANCE_IMAGES: string[] = getImagesByFolder("freelance");
const OTHERS_IMAGES: string[] = getImagesByFolder("others");

export {
  FLINT_IMAGES,
  DUCK_WALLET_IMAGES,
  FLAPPY_DUCK_IMAGES,
  GUIDER_IMAGES,
  ZGC_IMAGES,
  FREELANCE_IMAGES,
  OTHERS_IMAGES,
};
