import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const headingControls = useAnimation();
  const formControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const headingTop = headingRef.current.getBoundingClientRect().top;
      const formTop = formRef.current.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.8;

      if (headingTop < trigger) {
        headingControls.start("visible");
      }
      if (formTop < trigger) {
        formControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingControls, formControls]);

  return (
    <section className="contact-section" id="contact">
      {/* Heading Animation */}
      <motion.h2
        className="contact-heading"
        ref={headingRef}
        initial="hidden"
        animate={headingControls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        Contact Us
        <motion.span
          className="underline"
          initial={{ width: 0 }}
          animate={headingControls}
          variants={{
            visible: {
              width: "130px",
              transition: { duration: 0.8, ease: "easeInOut" }
            }
          }}
        ></motion.span>
      </motion.h2>

      {/* Form */}
      <motion.form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-form"
        ref={formRef}
        initial={{ opacity: 0, x: 100 }}
        animate={formControls}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        }}
      >
        <input type="hidden" name="access_key" value="81641007-8387-4a0e-b82e-96c1ddf2bb8e" />

        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea name="message" placeholder="Your Message" required />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
