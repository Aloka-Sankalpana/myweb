"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const frontend = [
  { name: "HTML5", icon: "/html-5.png" },
  { name: "CSS3", icon: "/css-3.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "React", icon: "/react.png" },
  { name: "Vite", icon: "/vite.png" },
  { name: "React Native", icon: "/react.png" },
]
const backend = [
  { name: "Java", icon: "/java.png" },
  { name: "Hibernate", icon: "/Hibernet.png" },
  { name: "Spring Boot", icon: "/Springboot.png" },
  { name: "PHP", icon: "/php.png" },
]
const database = [
  { name: "MySQL", icon: "/mysql.png" },
  { name: "Firebase", icon: "/firebase.png" },
]
const tools = [
  { name: "VS Code", icon: "/vscode.png" },
  { name: "IntelliJ IDEA", icon: "/intelij.png" },
  { name: "Android Studio", icon: "/android.png" },
  { name: "Arduino IDE", icon: "/aud.png" },
  { name: "Git", icon: "/github.png" },
  { name: "Code::Blocks", icon: "/codeblock.png" },
  { name: "Postman", icon: "/postman.png" },
  { name: "draw.io", icon: "/drowid.png" },
  { name: "Figma", icon: "/figma.png" },
]

function TechGrid({ title, items }: { title: string; items: { name: string; icon: string }[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10"
    >
      <motion.h3
        className="text-2xl font-bold text-center text-blue-400 mb-6"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            className="flex flex-col items-center bg-background rounded-xl shadow-lg p-6 w-36 h-40"
          >
            {item.icon.startsWith("/") ? (
              <Image src={item.icon} alt={item.name} width={48} height={48} className="mb-4" />
            ) : (
              <span className="text-5xl mb-2">{item.icon}</span>
            )}
            <span className="font-semibold text-lg text-white text-center mt-auto">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-secondary min-h-screen"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            A comprehensive set of technologies and tools I use to build robust applications
          </motion.p>
        </div>

        <TechGrid title="Frontend Technologies" items={frontend} />
        <TechGrid title="Backend Technologies" items={backend} />
        <TechGrid title="Database" items={database} />
        <TechGrid title="Development Tools" items={tools} />
      </motion.div>
    </section>
  )
}
