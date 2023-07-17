import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { animate, motion } from "framer-motion";
import maryam from "../../assets/Maryam.jpeg";
import maryamTwo from "../../assets/Maryam2.jpeg";
const Romance = () => {
  return (
    <div className="font-medium">
      <Header />
      <Main />
      <section className="bg-[#96897B] h-screen flex flex-col justify-center items-center text-5xl">
        1..
      </section>
      <section className="bg-[#904C77] h-screen flex flex-col justify-center items-center text-5xl">
        2..
      </section>
      <section className="bg-[#ECCFC3] h-screen flex flex-col justify-center items-center text-5xl">
        Go..🎊
      </section>
      <Pictures />
      <Footer />
    </div>
  );
};

export default Romance;

const Header = () => {
  const { name } = useParams();
  const [showScroll, setShowScroll] = useState(false);
  const [text] = useTypewriter({
    words: [
      `I can’t believe I’m still falling for you😔. This feeling has no boundaries. You’re giving me so much without even knowing. I love you more than anything in the world. Good morning Olaide❤️`,
    ],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  // const text = "I really hope you had a good sleep.";
  const scrollVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 15, type: "spring", stiffness: 300 },
    },
  };
  return (
    <section className="header h-screen bg-[#E6ACCC] pt-5 px-2 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-2xl md:text-5xl md:text-center">{text}</h2>
        <span className="text-2xl md:text-5xl">
          <Cursor cursorStyle="|" cursorColor="red" />
        </span>
      </div>
      <motion.p
        className="mt-40"
        variants={scrollVariants}
        initial="initial"
        animate="animate"
      >
        Keep scrolling baby...
      </motion.p>
    </section>
  );
};

const Main = () => {
  const variants = {
    initial: { opacity: 0, y: "20vh" },
  };
  return (
    <motion.div
      className="header h-screen bg-[#C6F91F] pt-5 px-2 flex flex-col items-center justify-center"
      // variants={variants}
      // initial="initial"
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, type: "tween" }}
      // viewport={{ amount: 0.1 }}
    >
      <motion.p
        className="text-2xl md:text-5xl md:text-center"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I know it's a long day ahead and the thought of that is probably
        overwhelming right now.{" "}
      </motion.p>
      <motion.p
        className="text-2xl md:text-5xl md:text-center mt-[100px]"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        So I thought, why not show you the most beautiful thing in the world to
        brighten up your day?🤔
      </motion.p>
      <motion.p
        className="text-2xl md:text-5xl md:text-center p-3 mt-[100px] shadow1 rounded-lg text-white bg-[#B82929]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        Ready??
      </motion.p>
    </motion.div>
  );
};

const Pictures = () => {
  return (
    <section className="bg-[#BEEF9E] py-10 ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-[50px]">
        <motion.img
          src={maryamTwo}
          alt="Beautiful girl"
          className="md:w-[50%] rounded-lg"
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.img
          src={maryam}
          alt="Beautiful girl"
          className="md:w-[50%] rounded-lg"
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="h-screen bg-[#B2ACE2] py-10 px-2 flex flex-col items-center justify-center">
      <motion.p
        className="text-2xl md:text-5xl md:text-center mb-10"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        I really hope that made you smile😙, baby?
      </motion.p>
      <motion.p
        className="text-2xl md:text-5xl md:text-center"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        I hope the universe once again conspires in your favor and you have a
        day just as lovely as you❤️.
      </motion.p>
    </section>
  );
};
