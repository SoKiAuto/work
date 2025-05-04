import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <a
      href={link}
      className="text-cyan-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="p-6 bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-500 mb-4">My Work</h2>
        <p className="text-lg text-gray-400">Explore some of the projects I have worked on.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="PCS7 Automation"
          description="Worked on 6 compressors in-house, programming and optimizing SCADA systems."
          link="https://example.com/project1"
        />
        <ProjectCard
          title="Adani CNG SCADA System"
          description="Implemented SCADA for all CNG stations, controlling systems from a central control room."
          link="https://example.com/project2"
        />
        <ProjectCard
          title="Kenya Steel Manufacturing"
          description="My first international project in Africa, involving hardware and software upgrades."
          link="https://example.com/project3"
        />
      </div>
    </section>
  );
};

export default Projects;
