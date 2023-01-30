import bannerImg from '../assets/logo.gif';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../action/userAction';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="w-full h-[4.2rem] hidden md:block"></div>
      <nav
        className={`bg-transBrown h-[100vh] top-0 fixed tracking-wider md:h-auto ease-in-out duration-500 drop-shadow-xl md:w-full py-2 text-2xl md:overflow-visible md:block z-50 ${
          isHidden ? 'w-48' : 'overflow-hidden w-0'
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
            <Link
              to="/"
              className="mb-4 md:mb-0 px-5 hover:bg-brown mx-1 hover:text-brightYellow rounded "
            >
              Home
            </Link>
            <Link
              to="/product"
              className="mb-4 md:mb-0 px-5 hover:bg-brown mx-1 hover:text-brightYellow rounded "
            >
              Products
            </Link>
            <a
              href="/#about"
              className="mb-4 md:mb-0 px-5 hover:bg-brown mx-1 hover:text-brightYellow rounded "
            >
              About
            </a>
            <a
              href="/#contact"
              className="mb-4 md:mb-0 px-5 hover:bg-brown mx-1 hover:text-brightYellow rounded "
            >
              Contact
            </a>
          </div>

          {/* Login && Cart Button */}
          <div className="flex flex-col md:flex-row justify-end">
            <Link
              to="/cart"
              className="border-2 border-brown active:border-blue-300 px-3 rounded-md mx-2 my-2 relative"
            >
              <i className="fa-solid fa-cart-shopping text-base px-1 py-2"></i>
              Cart
              {cartItems.length > 0 && (
                <span className=" absolute top-[-17px] left-[-13px] z-50 bg-red-500 rounded-full text-[20px] px-3">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </Link>

            {userInfo && userInfo.isAdmin ? (
              <button
                className="relative border-2 border-brown px-2 rounded-md mx-2 my-2 active:border-blue-300"
                onClick={handleClick}
              >
                <i className="fa-solid fa-user text-base mr-2 py-2"></i>
                {userInfo.name}
                {!isOpen ? (
                  <i className="fa-solid fa-caret-down text-sm ml-2 "></i>
                ) : (
                  <i className="fa-solid fa-caret-up text-sm ml-2 "></i>
                )}
                {isOpen && (
                  <div className="bg-transBrown absolute w-[6rem] left-[6rem]  md:left-[-.15rem] bottom-[0px] md:bottom-[-7.5rem] justify-center z-[50] flex flex-col shadow-xl border rounded-md border-brown px-1 py-2">
                    {[
                      ['Admin', '/admin'],
                      ['Profile', '/profile'],
                      ['Logout', '/login'],
                    ].map(([link, url], i) => (
                      <Link
                        key={i}
                        to={url}
                        className="px-5 hover:bg-brown hover:text-brightYellow rounded"
                        onClick={i === 2 && logoutHandler}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
            ) : userInfo ? (
              <button
                className="relative border-2 border-brown px-2 rounded-md mx-2 my-2 active:border-blue-300"
                onClick={handleClick}
              >
                <i className="fa-solid fa-user text-base mr-2 py-2"></i>
                {userInfo.name}
                {!isOpen ? (
                  <i className="fa-solid fa-caret-down text-sm ml-2 "></i>
                ) : (
                  <i className="fa-solid fa-caret-up text-sm ml-2 "></i>
                )}
                {isOpen && (
                  <div className="bg-transBrown absolute w-[6rem] left-[6rem]  md:left-[-.15rem] bottom-[0px] md:bottom-[-5.5rem] justify-center z-[50] flex flex-col shadow-xl border rounded-md border-brown px-1 py-2">
                    {[
                      ['Profile', '/profile'],
                      ['Logout', '/login'],
                    ].map(([link, url], i) => (
                      <Link
                        key={i}
                        to={url}
                        className="px-5 hover:bg-brown hover:text-brightYellow rounded"
                        onClick={i === 1 && logoutHandler}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
            ) : (
              <Link
                to="/login"
                className="relative border-2 border-brown px-2 rounded-md mx-2 my-2 active:border-blue-300"
              >
                <i className="fa-solid fa-user text-base mr-2 py-2"></i>
                Login
              </Link>
            )}
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
