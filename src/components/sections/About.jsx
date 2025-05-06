import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "PLC Programming",
    "SCADA Development",
    "VFD Integration",
    
  ];

  const backendSkills = ["TIA Portal", "PCS7", "WinCC", "n3uron","React","MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-blue-500/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-200 mb-6">
            I’m Kishan Solanki, an Automation Engineer with expertise in PLC programming, SCADA development, and VFD systems. 
            I work with tools like TIA Portal, PCS7, WinCC, n3uron, and React to build smart, connected industrial automation solutions. 
            My goal is to bridge the gap between automation and modern web technologies to drive efficiency and innovation on the factory floor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Automation & Control Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Industrial Software & Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-blue-500/10 border hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4 text-blue-400">🏫 Education</h3>
  <ul className="list-disc list-inside text-gray-200 space-y-2">
    <li>
      <strong>B.E. in Electrical Engineering</strong> – Gujarat Technological University (2018 – 2021)
    </li>
    <li>CGPA: 8.79</li>
    <li>
      <strong>Diploma in Electrical Engineering</strong> – Gujarat Technological University (2015 – 2018)
    </li>
    <li>CGPA: 7.89</li>
  </ul>
</div>

        <div className="p-6 rounded-xl border-blue-500/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4 text-blue-400">💼 Work Experience</h3>
        <div className="space-y-4 text-gray-200">
            <div>
            <h4 className="font-semibold">
                Senior Automation Engineer – Matrix Automation System, Ahmedabad
            </h4>
            <p>
                April 2023 – Present<br />
                Working on industrial automation projects involving PLC programming, SCADA development, and VFD integration using platforms like TIA Portal, WinCC, and PCS7.
            </p>
            </div>

            <div>
            <h4 className="font-semibold">
                Trainee Automation Engineer – Sofcon India Private Limited
            </h4>
            <p>
                6-month training focused on hands-on PLC programming, SCADA systems, and industrial control applications.
            </p>
            </div>
        </div>
        </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
