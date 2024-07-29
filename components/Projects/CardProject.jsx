"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function CardProject({ item, index }) {
  const initialization =
    index % 2 == 0
      ? {
          x: -60,
          opacity: 0,
        }
      : {
          x: 60,
          opacity: 0,
        };
  return (
    <motion.div
      initial={initialization}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="border-2 p-4 flex flex-col justify-between gap-10 rounded-lg bg-[rgb(21,22,40)] border-[rgb(133,76,230)]"
    >
      <div className="flex flex-col gap-4">
        <Image
          src={item.image.src}
          alt="image"
          width={100}
          height={100}
          className="w-full rounded-md"
          unoptimized={true}
        />
        <div className="flex flex-wrap gap-2">
          {item.tech.map((e, i) => {
            return (
              <p
                key={i}
                className="text-blue-200 w-fit p-1 text-xs sm:text-sm rounded-md bg-[rgb(82,98,238)]"
              >
                {e}
              </p>
            );
          })}
        </div>
        <h1 className="text-md sm:text-lg lg:text-xl font-bold text-white">
          <span className="font-normal">{item?.typeProject}</span> {item?.title}
        </h1>
        <p className="text-white text-sm text-justify">{item.description}</p>
      </div>

      <div>
        <div className="flex justify-around">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500"
            onClick={() => window.open(item?.seeCode, "_blank")}
          >
            See Code
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => window.open(item?.liveDemo, "_blank")}
            className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500"
          >
            Live Demo
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
