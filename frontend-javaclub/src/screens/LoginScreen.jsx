import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import loginImg from '../assets/loginImg.jpg';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {login} from '../action/userAction';

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [countdown, setCountdown] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {loading, error, userInfo} = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  useEffect(() => {
    if (attempts === 0) {
      setCountdown(10);
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        window.location.reload();
      }, 10000);
    }
  }, [attempts]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (attempts > 0) {
      setAttempts((prevAttempts) => prevAttempts - 1);
      dispatch(login(email, password));
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-screen  object-cover shadow-lg"
            src={loginImg}
            alt=""
          />
        </div>

        <div className=" flex flex-col justify-center">
          {error && (
            <div className="flex justify-center ">
              <div className="bg-[#d82f424a] text-red p-2 text-center max-w-[25rem] font font-sans rounded mb-4">
                {attempts === 0 ? (
                  <span className="font-bold">
                    {' '}
                    Too many attemps {countdown} pls wait
                  </span>
                ) : (
                  `${error} `
                )}
                {attempts > 0 && (
                  <span className="font-semibold">
                    {attempts} attemps remaining
                  </span>
                )}
              </div>
            </div>
          )}
          <form
            onSubmit={submitHandler}
            className="max-w-[400px] w-full mx-auto bg-white shadow-lg p-4 rounded-md"
          >
            <h2 className=" text-6xl font-bold text-center py-6">JavaClub</h2>
            <div className="flex flex-col py-2 font-sans">
              <label>Email Address</label>
              <input
                required
                className="border p-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex. email@gmail.com"
              />
            </div>
            <div className="flex flex-col py-2 font-sans">
              <label>Password</label>
              <input
                required
                className="border p-2 font-sans"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter you Password here"
              />
            </div>
            <button
              type="submit"
              className="font-sans border w-full my-5 py-2 btn-black text-white"
            >
              Sign In
            </button>
            <div className="font-sans">
              <p>
                New Here?
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : '/register'}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {' '}
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
