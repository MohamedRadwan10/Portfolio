import React, { useEffect, useState } from "react";
import Style from "./Skills.module.css";
import image1 from "../../assets/download (1).png";
import image2 from "../../assets/R.png";
import image3 from "../../assets/javascript-logo-7539.png";
import image4 from "../../assets/R (2).png";
import image5 from "../../assets/R (1).png";
import image6 from "../../assets/typescript-4096.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants/Variants";

const logos = [
  { id: 1, imgUrl: image1 },
  { id: 2, imgUrl: image2 },
  { id: 3, imgUrl: image3 },
  { id: 4, imgUrl: image4 },
  { id: 5, imgUrl: image5 },
  { id: 6, imgUrl: image6 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5 border-bottom" id="skills">
      <h1 className="txt-title text-center">Skills</h1>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        animate={isVisible ? "show" : "exit"}
        className="mx-auto row py-5 g-4 col-md-6"
      >
        {logos.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className={Style.product}>
              <img
                className={`${Style.image} w-100`}
                src={item.imgUrl}
                alt={`Skill logo ${item.id}`}
                height={175}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
