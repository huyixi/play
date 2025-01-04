function SiteNav() {
  return (
    <nav id="nav" className="fixed w-[94px] z-10 top-[16px] ">
      <div>
        <img src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div>
        <a href="/">
          <img src="/home.svg" alt="home" width={50} height={50}></img>
        </a>
        <button>
          <img src="/search.svg" alt="search" width={50} height={50}></img>
        </button>
      </div>
    </nav>
  );
}

export default SiteNav;
