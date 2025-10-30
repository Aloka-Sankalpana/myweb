"use client"

import { motion } from "framer-motion"

interface SkillCardProps {
  skill: {
    name: string
    icon: string
  }
}

export default function SkillCard({ skill }: SkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors cursor-pointer"
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h3 className="font-poppins font-semibold text-foreground">{skill.name}</h3>
    </motion.div>
  )
}
