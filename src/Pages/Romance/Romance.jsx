import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { animate, motion } from "framer-motion";
const Romance = () => {
  return (
    <div className="font-medium">
      <Header />
      <Main />
    </div>
  );
};

export default Romance;

const Header = () => {
  const { name } = useParams();
  const [showScroll, setShowScroll] = useState(false);
  const [text] = useTypewriter({
    words: [
      `I tried to think of the sweetest way to wake you up. But all I can think of is you. So I ended up giving you the simplest morning greeting my heart could ever know; “I love you❤️”.`,
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
        Keep scrolling...
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
      <motion.p className="text-2xl md:text-5xl md:text-center">
        So I thought, why not show you the most beautiful thing in the world to
        brighten up your day?{" "}
      </motion.p>
    </motion.div>
  );
};

const Pictures = () => {
  return <section></section>;
};
