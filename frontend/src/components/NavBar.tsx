const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-2xl font-bold text-orange-600">DLIFE Car Rentals</div>
        <ul className="flex space-x-6">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Vehicles</li>
          <li className="hover:text-orange-600 cursor-pointer">Services</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  