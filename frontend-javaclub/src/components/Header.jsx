import bannerImg from '../assets/logo.gif';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <header>
      <div className="w-full h-[4.2rem] hidden md:block"></div>
      <nav
        className={`bg-transBrown h-[100vh] top-0 fixed tracking-wider md:h-auto overflow-auto ease-in-out duration-500 drop-shadow-xl md:w-full py-2 text-2xl md:block z-50 ${
          !isHidden ? 'w-48' : ' w-0'
        }`}
      >
        {/* Contianer */}
        <div className="flex flex-col justify-between items-center max-w-[1280px] mx-auto md:flex-row">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:flex-row text-[1.2em]">
            <img src={bannerImg} alt="Logo" className="w-14" />
            <h1 className="">JavaClub</h1>
          </div>
          {/* Links */}
          <div className="flex flex-col text-center mt-10 md:mt-0 md:flex-row">
            {[
              ['Home', '/'],
              ['Product', '/products'],
              ['Contact', '/'],
              ['About', '/'],
            ].map(([title, url], i) => (
              <Link key={i} to={url} className="px-4 mb-4 md:mb-0">
                {title}
              </Link>
            ))}
          </div>
          {/* Login && Cart Button */}
          <div className="flex flex-col md:flex-row justify-end">
            <Link
              to="/cart"
              className="border-2 border-slate-500 px-3 rounded-md mx-2 my-2"
            >
              <i className="fa-solid fa-cart-shopping text-base px-1 py-2"></i>
              Cart
            </Link>
            <Link
              to="/user"
              className="border-2 border-slate-500 px-3 rounded-md mx-2 my-2"
            >
              <i className="fa-solid fa-user text-base px-1 py-2"></i>
              Login
            </Link>
          </div>
        </div>
      </nav>
      {/* Burger button */}
      <div
        className={`navBtn right-[5%] top-[5%] z-50 md:hidden ${
          !isHidden ? 'change' : ''
        }`}
        onClick={() => setIsHidden(!isHidden)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
};

export default Header;
