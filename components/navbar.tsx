"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="font-poppins font-bold text-xl text-primary hover:text-primary-dark transition-colors"
          >
            Aloka
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-foreground font-medium hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {/* Underline Animation */}
                <motion.span
                  className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-[#050A4D] via-[#210873] to-[#6C0391] scale-x-0 origin-left transition-transform duration-300"
                  whileHover={{ scaleX: 1 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ rotate: -15, scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  )
}
