const SocialIcon = () => {
  return (
    <div className="social-icon absolute inset-x-0 flex justify-center top-[18%] text-sm lg:top-[40%] md:top-[20%] z-1 lg:text-2xl md:text-base">
      <div className="w-[35%] py-2 text-center">
        <h1 className=" text-5xl lg:text-9xl md:text-8xl text-darkBrown drop-shadow-2xl shadow-yellow-500">
          Java Club
        </h1>
        <div>
          <a href="/">
            <i className="text-white drop-shadow-2xl border-white border hover:bg-transBrown rounded-full p-2 m-1 fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="text-white drop-shadow-2xl border-white border hover:bg-transBrown rounded-full p-2 m-1 fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="text-white drop-shadow-2xl border-white border hover:bg-transBrown rounded-full p-2 m-1 fa-brands fa-google-plus"></i>
          </a>
          <a href="/">
            <i className="text-white drop-shadow-2xl border-white border hover:bg-transBrown rounded-full p-2 m-1 fa-brands 
            fa-instagram"></i>             
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;
