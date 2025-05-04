import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <motion.section
      className="flex justify-center items-center h-screen bg-gray-900 text-white text-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-5xl font-extrabold mb-4">
          <Typewriter
            options={{
              strings: ["Hello, World.", "I'm Kishan Solanki"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-lg max-w-md mx-auto mb-8">
          Welcome to my portfolio. I'm an automation engineer with expertise in SCADA,
          PLC, VFD, and more. Feel free to explore my work and projects!
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
        >
          Learn More
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
