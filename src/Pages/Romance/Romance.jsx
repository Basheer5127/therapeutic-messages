import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import salmahOne from "../../assets/aliya.jpg";
import salmahTwo from "../../assets/aliya2.jpg";
const Romance = () => {
  const parentVariant = {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
      transition: {
        type: "tween",
        // when: "beforeChildren",
        // duration: 0.8,
        // staggerChildren: 0.02,
        // delayChildren: 5,
      },
    },
  };
  const childVariant = {
    initial: { x: "100vw" },
    animate: { x: 0 },
  };
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="font-medium">
      {/* <button
        className="text-3xl text-[#000] text-end w-full"
        onClick={() => setNavOpen(!navOpen)}
      >
        X
      </button> */}

      {/* {navOpen && (
        <AnimatePresence>
          <motion.ul
            exit={{ y: "-100vh" }}
            key="list"
            variants={parentVariant}
            initial="initial"
            animate="animate"
            className="fixed top-[5%] left-0 bg-[#000] text-[#fff] text-3xl w-full h-full flex flex-col items-center py-20 gap-10"
          >
            <motion.li
            // variants={childVariant}
            // initial="initial"
            // animate="animate"
            >
              Home
            </motion.li>
            <motion.li
            // variants={childVariant}
            // initial="initial"
            // animate="animate"
            >
              About
            </motion.li>
            <motion.li
            // variants={childVariant}
            // initial="initial"
            // animate="animate"
            >
              Contact
            </motion.li>
            <motion.li
            // variants={childVariant}
            // initial="initial"
            // animate="animate"
            >
              {" "}
              Resume
            </motion.li>
          </motion.ul>
        </AnimatePresence>
      )} */}
      <Header />
      <Main />
      {/* <section className="bg-[#96897B] h-screen flex flex-col justify-center items-center text-5xl">
        1..
      </section>
      <section className="bg-[#904C77] h-screen flex flex-col justify-center items-center text-5xl">
        2..
      </section>
      <section className="bg-[#ECCFC3] h-screen flex flex-col justify-center items-center text-5xl">
        Go..🎊
      </section> */}
      <Suspense />
      <Pictures />
      <Footer />
    </div>
  );
};

export default Romance;

// `I can’t believe I’m still falling for you😔. This feeling has no boundaries. You’re giving me so much without even knowing. I love you more than anything in the world. Good morning my beautiful Sallie❤️`,
const Header = () => {
  const { name } = useParams();
  const [showScroll, setShowScroll] = useState(false);
  const [text] = useTypewriter({
    words: [
      `The thoughts of you had me developing this till 3am last night😔. The way you make me feel is unexplainable. You're giving me so much without even realizing. Good morning Aliyah❤️.`,
    ],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  const [sallie] = useTypewriter({
    words: ["My dear Aliyah,"],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 50,
    
  });
 

  const scrollVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 18, type: "spring", stiffness: 100 },
    },
  };
  return (
    <section className="header h-screen bg-[#151515] pt-5 px-2 flex flex-col items-start justify-center">
      {/* [#E6ACCC]  */}

      <p className="mb-10 text-2xl md:text-4xl md:text-center">{sallie}</p>
      <div>
        <h2 className="text-2xl md:text-3xl md:text-center">{text}</h2>
      </div>
      <motion.p
        className="mt-40 text-xl"
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
      className="header h-screen bg-[#201919] pt-5 px-2 flex flex-col items-center justify-center"
      // variants={variants}3
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
        I know it's a long day ahead together with your last exam for the semester and the thought of how it's gonna go is probably overwhelming right now.{" "}
      <motion.p
        className="text-2xl md:text-5xl md:text-center mt-[100px]"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
       So I thought, why not show you the most beautiful thing in the world to help brighten up your day?🤔
      </motion.p>
      </motion.p>
      <motion.p
        className="text-2xl md:text-5xl md:text-center p-3 mt-[100px] shadow1 rounded-lg text-white bg-[#B82929]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 5 }}
      >
        Scroll when ready💗
      </motion.p>
    </motion.div>
  );
};

const Suspense = () => {
  const [text] = useTypewriter({
    words: ["1...", "2...", "Ready???", "Scroll🎊🎊"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <section className="bg-[#28282C] h-screen flex flex-col justify-center items-center text-5xl">
      {text}
    </section>
  );
};
const Pictures = () => {
  return (
    <section className="bg-[#151515] py-10 ">
      <div className="w-[85%] mx-auto flex flex-col md:flex-row gap-[50px]">
        <motion.img
          src={salmahOne}
          alt="Beautiful girl"
          className="md:w-[50%] rounded-lg"
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.img
          src={salmahTwo}
          alt="Beautiful girl"
          className="md:w-[50%] rounded-lg"
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="h-screen bg-[#151515] py-10 px-2 flex flex-col items-center justify-center">
      <motion.p
        className="text-2xl md:text-5xl md:text-center mb-10"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        I really hope that made you smile?
      </motion.p>
      <motion.p
        className="text-2xl md:text-5xl md:text-center"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
       I hope the universe once again conspires in your favor and you have a day just as lovely as you.
        
      </motion.p>
      <p className="text-2xl md:text-5xl md:text-center mt-10">From your dear 'Adigun' to 'Adunni'😂</p>
    </section>
  );
};
