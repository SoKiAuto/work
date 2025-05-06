import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: PCS7 Gas Compressors */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">PCS7 3 Project – Gas Compressors</h3>
              <p className="text-gray-400 mb-4">
                Led the complete automation of 6 gas compressors integrated with Siemens PLCs using PCS7. This project included the setup of control loops, remote monitoring, and fault detection for all compressors, ensuring smooth and efficient operations within the plant.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  PCS7
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Siemens PLC
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Automation
                </span>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 2: Adani Total Gas */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Adani Total Gas – SCADA Connectivity</h3>
              <p className="text-gray-400 mb-4">
                Developed SCADA connectivity for multiple CNG stations at the control room, using Siemens S7-1500 PLCs and DNP protocol. The project involved real-time data monitoring and control, enabling improved operations and security at CNG stations.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  S7-1500
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  SCADA
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  DNP Protocol
                </span>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 3: Steel Plant in Kenya */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">International Project – Steel Plant, Kenya</h3>
              <p className="text-gray-400 mb-4">
                Upgraded the hardware and software of the PCS7 system for a steel plant in Kenya. The project included extensive PLC programming, SCADA system enhancements, and real-time data monitoring for plant-wide control.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  PCS7
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  PLC Programming
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  International Project
                </span>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 4: Lua Programming for Altronic Controller */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Lua Programming – Altronic DE-4000 Controller</h3>
              <p className="text-gray-400 mb-4">
                Developed Lua scripts for Altronic DE-4000 controllers used in gas compressors. The project involved automation of gas compressor control sequences and real-time diagnostics for improved operational efficiency.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Lua Programming
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Altronic DE-4000
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Gas Compressor
                </span>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 5: Web-Based SCADA System Development */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Web-Based SCADA System – N3uron & React</h3>
              <p className="text-gray-400 mb-4">
                Working on a web-based SCADA system development using N3uron, React, JavaScript, and MongoDB. The project aims to provide real-time data monitoring, control, and visualization through an interactive web interface for industrial applications.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  N3uron
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  MongoDB
                </span>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
