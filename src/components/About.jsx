import useInView from "../hooks/useInView"; // Import the custom hook

const About = () => {
  const [inView, ref] = useInView(); // Use the custom hook to track if the section is in view

  return (
    <section
      ref={ref}
      className={`min-h-screen px-6 py-16 bg-gray-900 text-white transition-opacity duration-1000 ${
        inView ? "opacity-100 animate-fade-in" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

      <div className="mb-12">
        <p className="text-xl">
          Hi, I'm <span className="font-semibold text-cyan-300">Kishan Solanki</span>
        </p>
        <p className="mt-4 max-w-3xl">
          I’m an automation engineer passionate about building intelligent control systems and industrial digitalization. With deep expertise in SCADA, PLCs, and modern web technologies, I combine engineering precision with modern UI/UX for smart industrial solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Automation Engineer Section */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Automation Engineer</h3>
          <p className="mb-4">Experienced in designing and implementing industrial control systems.</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>SCADA Systems</li>
            <li>PLC Programming</li>
            <li>VFD Configuration</li>
            <li>Siemens Automation</li>
          </ul>
        </div>

        {/* Expertise Section */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Technical Expertise</h3>
          <p className="mb-4">Proficient in engineering tools and modern frameworks.</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>TIA Portal</li>
            <li>WinCC & PCS7</li>
            <li>N3uron</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>

      {/* Education and Work Experience */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Education</h3>
          <p>B.E. in Instrumentation & Control Engineering</p>
          <p className="text-sm text-gray-400">Graduated from [Your College], [Year]</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Work Experience</h3>
          <p>Automation Engineer at [Company Name]</p>
          <p className="text-sm text-gray-400">[Start Year] – Present</p>
        </div>
      </div>
    </section>
  );
};

export default About;
