const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4 bg-gray-950 shadow-md sticky top-0 z-50">
        <nav className="flex gap-6 text-gray-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
        <h1 className="text-lg font-semibold text-white">Kishan.Solanki</h1>
      </header>
    );
  };
  
  export default Header;
  