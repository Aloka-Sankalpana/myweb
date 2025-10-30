"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    name: "Accurate Fuel Tracking System",
    description:
      "An ESP32-based device developed to accurately measure fuel levels in vehicles. Real-time data is transmitted via Wi-Fi to a backend server for instant tracking. The system also detects unexpected fuel losses and enhances logistics efficiency.",
    technologies: ["Jakarta EE", "React Native", "Arduino", "MySQL"],
    link: "#",
    images: [             // <-- ✅ මේක අනිවාර්යයි!
      "/images/fuel1.jpeg",
      "/images/fuel2.jpeg",
      "/images/fuel3.jpeg",
      "/images/fuel4.jpeg",
      "/images/fuel5.jpeg",
    ],
  },
  {
    name: "Green Cycle - Waste Management Application",
    description:
      "Android app that delivers smart waste management solutions. Android mobile application that provides services through experimental solutions for commercial and environmental issues and waste management.Technologies - Android and Java Hibernate Web, Backend Database - MySQL and Firebase",
    technologies: ["Android", "Java EE", "Hibernate", "MySQL", "Firebase"],
    link: "#",
    images: [             // <-- මෙතනත් image list එකක්
      "/images/greencycle1.jpeg",
      "/images/greencycle2.jpeg",
      "/images/greencycle3.jpeg",
      "/images/greencycle4.jpeg",
      "/images/greencycle5.jpeg",
      "/images/greencycle6.jpeg",
      "/images/greencycle7.jpeg",
      "/images/greencycle8.jpeg",
      "/images/greencycle9.jpeg",
      "/images/greencycle11.jpeg",
      "/images/greencycle12.jpeg",
    ],
  },
  {
    name: "Driving School Management System",
    description:
      "A responsive web application designed for driving school management.",
    technologies: ["Spring Boot", "React + Vite", "Bootstrap", "MySQL"],
    link: "#",
    images: [             // <-- මෙතනත්
      "/images/s1.png",
      "/images/s2.png",
    ],
  },
];


export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Showcasing my best work across different technologies and domains
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
