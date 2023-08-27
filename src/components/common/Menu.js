const Menu = () => {
  return (
    <nav className="space-x-4 hidden lg:block">
      <a href="/edit" className="text-gray-600 hover:text-gray-800 uppercase">The Edit</a>
      <a href="/newArrivals" className="text-gray-600 hover:text-gray-800">New Arrivals</a>
      <a href="/designer" className="text-gray-600 hover:text-gray-800">Designers</a>
      <a href="/clothing" className="text-gray-600 hover:text-gray-800">Clothing</a>
      <a href="/shoes" className="text-gray-600 hover:text-gray-800">Shoes</a>
      <a href="/bags" className="text-gray-600 hover:text-gray-800">Bags</a>
      <a href="/accessories" className="text-gray-600 hover:text-gray-800">Accessories</a>
      <a href="/jewelry" className="text-gray-600 hover:text-gray-800">Jewelry</a>
      <a href="/beauty" className="text-gray-600 hover:text-gray-800">Beauty</a>
    </nav>
  );
};

export default Menu;