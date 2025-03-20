const Navbar = () => {
  return (
    <header className="bg-tertiary text-secondary p-4 md:p-6 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <p className="text-lg">Martin Taylor</p>
        </a>
        <button className="bg-[#2b2622] px-3 py-1 rounded-md cursor-pointer">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Navbar;
