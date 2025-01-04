function SiteNav() {
  return (
    <nav
      id="nav"
      className="fixed flex flex-col justify-center items-center w-[94px] h-[28px]  z-10 top-[16px] w-[94px] h-[94px] rounded-4 bg-white"
    >
      <div className="mt-[15px] mb-[11px]">
        <img
          src="/logo.svg"
          alt="logo"
          width={60}
          height={28}
          className="site-logo"
        />
      </div>
      <div className="flex justify-center border-2 w-full h-[40px]">
        <button className="buttonReset border-r-1">
          <img src="/home.svg" alt="home" width={16} height={16}></img>
        </button>
        <button className="buttonReset border-l-1">
          <img src="/search.svg" alt="search" width={16} height={16}></img>
        </button>
      </div>
    </nav>
  );
}

export default SiteNav;
