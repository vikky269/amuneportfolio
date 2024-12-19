"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Fashion store site",
    desc:   "A fashion store website showcasing a curated list of products, where users can explore stylish items and click on each product to view detailed information. Simple, elegant, and easy to navigate!",
    img: "/project1.png",
    link: "https://dwhitestore.netlify.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Recipe Explorer Web App",
    desc:"Recipe Explorer lets you browse recipes and watch YouTube tutorials with a click. Save your favorites to a dedicated section for quick access, making cooking fun and convenient for all skill levels!",
    img: "/project2.png",
    link: "https://mamasrecipe.netlify.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Van Rentage web App",
    desc: "A van rental web app built with React and React Router DOM allows users to browse available vans, view details, and book rentals seamlessly. It offers smooth navigation and a user-friendly experience.",
    img: "/project3.png",
    link: "https://vanz.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Gym Website",
    desc:  "A landing page for a fictional gym website. It shows the different pricing plans available in the Gym",
    img: "/project4.png",
    link: "https://amunefitclub.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white p-2">
                  <h1 className="text-2xl font-bold">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56  md:w-96 md:h-64">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-start">
                    <button className="p-2 md:text-md bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-24">
        <h1 className="text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Mobile Dev 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 cursor-pointer h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
