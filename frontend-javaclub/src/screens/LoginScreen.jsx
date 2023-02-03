import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
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
    <div>
      {loading && <Loader />}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="login-card-container">
        <div className="login-card">
          {/* login Error  */}
          {error && (
            <div className="flex justify-center absolute top-[20px]">
              <div className="bg-[#d82f424a] text-red p-2 text-center max-w-[25rem] font font-sans rounded mb-4">
                {attempts === 0 ? (
                  <span className="font-bold">
                    {' '}
                    Too many attempts {countdown} pls wait
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
          <div className="login-card-header text-5xl">
            <h1 className="">Sign In</h1>
            <div className="text-2xl">Please login to use the platform</div>
          </div>
          <form className="login-card-form" onSubmit={submitHandler}>
            <div className="form-item font-lato">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Email"
                id="emailForm"
              />
            </div>
            <div className="form-item font-lato">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                id="passwordForm"
                required
              />
            </div>
            <div className="form-item-other"></div>
            <button className="btn-black" type="submit">
              Sign In
            </button>
          </form>
          <div className="login-card-footer">
            Don't have an account?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Create an Account.
            </Link>
          </div>
          <div className="login-card-social font-lato">
            <div>Other Sign-In Options</div>
            <div className="login-card-social-btns">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-google"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
