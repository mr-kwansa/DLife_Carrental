const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-6 py-4 h-28">
        <div className="text-2xl font-bold text-red-400">

          <img
          src="images/dlife2-removebg-preview.png"
          className="h-52 "
          />
        </div>

        <ul className="flex space-x-6">
          <li className="hover:text-red-700 cursor-pointer">Home</li>
          <li className="hover:text-red-700 cursor-pointer">Vehicles</li>
          <li className="hover:text-red-700 cursor-pointer">Services</li>
          <li className="hover:text-red-700 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  