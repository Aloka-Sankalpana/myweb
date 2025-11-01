"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const images = [
  { src: "/Aloka1.png", alt: "CanGreen showcase 1" },
  { src: "/Aloka2.png", alt: "CanGreen showcase 2" },
  { src: "/Aloka3.png", alt: "CanGreen showcase 3" },
];

const whatIDoCards = [
  {
    img: "/mobileApp.png",
    title: "Mobile Application Development",
    desc: "Turning ideas into interactive mobile experiences.",
  },
  {
    img: "/softwareApp.png",
    title: "Software Application Development",
    desc: "Transforming ideas into seamless software solutions.",
  },
  {
    img: "/web.png",
    title: "Web Application Development",
    desc: "Crafting powerful web apps for a connected world.",
  },
];

export default function AboutSlider() {
  const [index, setIndex] = useState(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 10000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
    animate(progress, nextIndex, { duration: 0.6 });
  };

  const handlePrev = () => {
    const prevIndex = (index - 1 + images.length) % images.length;
    setIndex(prevIndex);
    animate(progress, prevIndex, { duration: 0.6 });
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-20 p-10 md:p-20 bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] min-h-screen overflow-hidden"
    >
      {/* ✅ About Me Section */}
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Hi, I’m Aloka — a passionate developer and creative thinker who loves bringing
          ideas to life through technology and design. I enjoy crafting beautiful,
          functional digital experiences that connect people and make a real impact.
          Every project I take on is a new opportunity to learn, experiment, and grow.
        </p>
      </motion.div>

      {/* ✅ Slider + Description */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 w-full max-w-7xl">
        {/* Left: 3D Slider */}
       <motion.div
  className="relative flex items-center justify-center w-full md:w-1/2 min-h-[420px]"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.3 }}
>
  {images.map((item, i) => {
    const pos = (i - index + images.length) % images.length;

    // 3D offsets
    const offsetX = pos === 0 ? 0 : pos === 1 ? 220 : pos === 2 ? -220 : 0;
    const rotateY = pos === 0 ? 0 : pos === 1 ? -20 : 20;
    const scale = pos === 0 ? 1 : 0.85;
    const opacity = pos === 0 ? 1 : 0.5;
    const zIndex = pos === 0 ? 10 : 5;

    return (
      <motion.div
        key={i}
        animate={{ x: offsetX, rotateY, scale, opacity, zIndex }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="absolute"
      >
        <motion.div
          whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="relative w-[280px] h-[380px] md:w-[360px] md:h-[460px] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={pos === 0}
            sizes="(max-width: 768px) 80vw, 560px"
            className="object-contain p-6"
          />
        </motion.div>
      </motion.div>
    );
  })}
</motion.div>

        {/* Right: Education + Mission */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6 text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-semibold">My Education</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEng (Hons) Software Engineering <br />
            IIC University of Technology (Cambodia) <br />
            Java Institute for Advanced Technology <br />
            2021 - 2025
          </p>

          <h3 className="text-3xl font-semibold">My Mission</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            My mission is to innovate and bring ideas to life through stunning visuals
            and meaningful interactions. I combine creativity and technology to deliver
            impactful digital solutions that inspire and engage audiences.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-3">
            <button
              onClick={handlePrev}
              className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              ◀ Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              Next ▶
            </button>
          </div>
        </motion.div>
      </div>

      {/* ✅ What I Do (Tree Layout) */}
      <motion.div
        className="text-center text-white mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold mb-6">What I Do?</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16">
          Make ideas happen through innovative software, mobile, and web applications.
        </p>

        {/* Tree Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
          {whatIDoCards.map((card, index) => {
            const variants = [
              { initial: { opacity: 0, x: -250, rotateY: 20 }, whileInView: { opacity: 1, x: 0, rotateY: 0 } },
              { initial: { opacity: 0, y: 100, scale: 0.8 }, whileInView: { opacity: 1, y: 0, scale: 1 } },
              { initial: { opacity: 0, x: 250, rotateY: -20 }, whileInView: { opacity: 1, x: 0, rotateY: 0 } },
            ];

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] rounded-3xl shadow-2xl p-6 w-[300px] h-[200px] md:w-[340px] md:h-[220px] relative overflow-hidden"
                initial={variants[index].initial}
                whileInView={variants[index].whileInView}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: index === 0 ? -3 : index === 2 ? 3 : 0,
                  y: -8,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
              >
                <div className="relative w-16 h-16 mb-3">
                  <Image src={card.img} alt={card.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                <p className="text-sm text-gray-300 text-center">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ✅ Expertise Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto gap-8 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/cangreen.png" alt="My Expertise" fill className="object-cover" />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-white space-y-4 text-left">
          <h3 className="text-3xl font-semibold">CEO & Founder</h3>
          <h4 className="text-3xl font-semibold">🌿 About CanGreen Solutions</h4>
          <p className="text-lg text-gray-300 leading-relaxed">
CanGreen Solutions is a Sri Lankan-based startup committed to transforming the future of waste management through innovation. We specialize in developing smart, tech-driven solutions to reduce environmental pollution and promote a sustainable, circular economy. By integrating Software, IoT, and Artificial Intelligence (AI), we are building systems that turn everyday waste into valuable resources — creating a cleaner and greener planet for the next generation.
♻️ Flagship Project – Green Cycle 
Our pilot initiative, Green Cycle, demonstrates how technology can revolutionize polythene waste recycling. This IoT-enabled smart system collects real-time data, encourages responsible recycling habits, and optimizes waste processing.
Green Cycle isn’t just a project — it’s a movement toward an eco-conscious Sri Lanka 🇱🇰, where waste is reimagined as opportunity.

🚀 What We Do

Build intelligent recycling ecosystems
Develop smart waste collection systems powered by IoT + AI
Promote sustainability through data-driven insights
Turn waste into value by merging tech with environmental purpose
At CanGreen, we believe innovation and nature should work hand in hand. Every recycled piece of polythene is a step closer to a greener, smarter Sri Lanka. 🌍💚
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From design to development, I ensure seamless, modern, and interactive
            digital experiences that engage users effectively.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
