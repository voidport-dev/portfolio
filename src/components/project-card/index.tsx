import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import TSIcon from "@assets/typescript.svg?react";
import { useRef, useState } from "react";
import { XIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSetAtom } from "jotai";
import { cursorAtom } from "@/store";

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
  const setCursor = useSetAtom(cursorAtom);
  const outsideRef = useRef<HTMLDivElement>(null);
  const modalSwiperRef = useRef<SwiperType>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setCursor({ isGrabbing: true, isHovering: false });
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (modalSwiperRef.current) {
      modalSwiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (modalSwiperRef.current) {
      modalSwiperRef.current.slideNext();
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
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full flex justify-center items-center" ref={outsideRef}>
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
                        className="text-xl hover:cursor-none hover:opacity-80"
                      >
                        {company}
                      </a>
                    )}
                    <p className="text-gray-400 whitespace-nowrap text-sm md:text-base">
                      {employmentType}
                    </p>
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
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              loop
              pagination={true}
              navigation={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper w-80 h-40"
              speed={600}
              spaceBetween={30}
              touchRatio={1}
              touchAngle={45}
              resistance={true}
              resistanceRatio={0.85}
              watchSlidesProgress={true}
              preventInteractionOnTransition={false}
              threshold={5}
              longSwipesRatio={0.5}
              longSwipesMs={300}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="max-w-full max-h-full object-contain rounded-lg mx-auto"
                    alt={`${title} project image ${index + 1}`}
                    onClick={() => openModal(index)}
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-75 flex items-center justify-center z-50"
          onKeyDown={handleKeyDown}
          onClick={handleModalClick}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4 w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-20"
            >
              <XIcon size={16} />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center z-20 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center z-20 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <Swiper
              onSwiper={(swiper) => {
                modalSwiperRef.current = swiper;
                swiper.slideToLoop(selectedImageIndex, 0);
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              loop
              pagination={true}
              navigation={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper w-full h-full"
              speed={600}
              spaceBetween={120}
              touchRatio={1}
              touchAngle={45}
              resistance={true}
              resistanceRatio={0.85}
              watchSlidesProgress={true}
              preventInteractionOnTransition={false}
              threshold={5}
              longSwipesRatio={0.5}
              longSwipesMs={300}
              onDragStart={() =>
                setCursor({ isGrabbing: true, isHovering: false })
              }
              onDragEnd={() =>
                setCursor({ isGrabbing: false, isHovering: false })
              }
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="max-w-full max-h-[65vh] object-contain rounded-lg mx-auto"
                    alt={`${title} project image ${index + 1}`}
                    onClick={handleImageClick}
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
