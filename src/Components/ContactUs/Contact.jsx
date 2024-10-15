import React, { useEffect, useState } from "react";
import Style from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animation from "../../animation/Animation - 1728401517502 (1).json";
import animation2 from "../../animation/Animation - 1728404240486.json";
import animationError from "../../animation/Animation - 1729016158068.json";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants/Variants";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(true);
  const [state, handleSubmit] = useForm("mqakzwgy");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="pt-5  border-bottom " id="contacts">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          animate={isVisible ? "show" : "exit"}
          className="d-flex gap-3"
        >
          <i className="fa-solid fa-envelope text-secondary fs-1"></i>
          <h2 className="txt-title">Contact me</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          animate={isVisible ? "show" : "exit"}
          className="text-secondary"
        >
          You can contact me at any time to discuss your project idea.
        </motion.p>

        <Row className="">
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            animate={isVisible ? "show" : "exit"}
            onSubmit={handleSubmit}
            className="col-md-6 d-flex flex-column gap-3 pt-5"
          >
            <div className="d-flex gap-4 justify-content-between">
              <label className="txt-title" htmlFor="email">
                Email Address
              </label>
              <input
                className={`${Style.area} form-control w-75 bg-dark border-secondary text-secondary`}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="d-flex justify-content-between gap-4">
              <label className="txt-title" htmlFor="message">
                Your Message
              </label>
              <textarea
                className={`${Style.area} form-control w-75 bg-dark border-secondary text-secondary`}
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-outline-secondary w-25 ms-auto  "
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>

            {state.succeeded ? (
              <>
                <h2 className="text-white fs-5 d-flex align-items-center m-0">
                  <Lottie
                    loop={false}
                    style={{ height: 100 }}
                    animationData={animation}
                  />
                  Your message has been sent successfully
                </h2>
              </>
            ) : (
              ""
            )}
            {state.errors ? (
              <h2 className="text-white fs-5 d-flex align-items-center m-0">
                <Lottie
                  loop={true}
                  style={{ height: 100 }}
                  animationData={animationError}
                />
                Your message has been sent successfully
              </h2>
            ) : (
              ""
            )}
          </motion.form>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            animate={isVisible ? "show" : "exit"}
            className="col-md-4 ms-auto"
          >
            <Lottie style={{ height: 300 }} animationData={animation2} />
          </motion.div>
        </Row>
        <div className="pt-5 pb-3 row  col-md-8 d-flex justify-content-between">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            animate={isVisible ? "show" : "exit"}
            className=" col-md-7  d-flex gap-2"
          >
            <i className="fa-solid fa-envelope-open fs-4 text-h2"></i>
            <p className="txt-title fs-5">
              <span className="text-secondary">
                mohamedradwan5557@gmail.com
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            animate={isVisible ? "show" : "exit"}
            className="col-md-5 ms-auto d-flex gap-2"
          >
            <i className="fa-solid fa-mobile-screen-button fs-4 text-h2 "></i>
            <h4 className="txt-title fs-5">
              <span className="text-secondary">+20 1023795856</span>
            </h4>
          </motion.div>
        </div>
      </section>
    </>
  );
}
