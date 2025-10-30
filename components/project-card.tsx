"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    technologies: string[];
    link: string;
    images: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 flex flex-col h-full"
    >
      {/* 🖼️ 3D Cube Image Slider */}
      <div className="relative w-60 h-100 mx-auto mt-4">
        <Swiper
          modules={[EffectCube, Pagination, Autoplay]}
          effect="cube"
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-60 h-100 "
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`${project.name} image ${index + 1}`}
                width={300}
                height={500}
                className="w-60 h-100 object-cover mx-auto mt-4 rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🧾 Project Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
          {project.name}
        </h3>
        <p className="text-muted mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-poppins font-semibold transition-colors"
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
