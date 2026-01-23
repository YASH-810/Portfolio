export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="w-auto border border-gray-700 px-6 py-2 flex justify-center items-center backdrop-blur-sm bg-black/20 rounded-full">
          <ul className="flex space-x-8 text-gray-300 font-medium">
            <li><a href="/" className="hover:text-[#d4b527] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#d4b527] transition">About</a></li>
            <li><a href="#projects" className="hover:text-[#d4b527] transition">Projects</a></li>
            <li><a href="#services" className="hover:text-[#d4b527] transition">Services</a></li>
            <li><a href="#contact" className="hover:text-[#d4b527] transition">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
