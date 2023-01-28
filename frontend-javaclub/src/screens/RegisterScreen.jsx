import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import loginImg from '../assets/loginImg.jpg';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {register} from '../action/userAction';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {loading, error, userInfo} = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not Match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-screen  object-cover"
            src={loginImg}
            alt=""
          />
        </div>

        <div className=" flex flex-col justify-center">
          {error && (
            <div className="flex justify-center ">
              <div className="bg-[#d82f424a] text-red p-2 text-center max-w-[25rem] font-sans rounded mb-4">
                {error}
              </div>
            </div>
          )}
          {message && (
            <div className="flex justify-center ">
              <div className="bg-[#d82f424a] text-red p-2 text-center max-w-[25rem] font-sans rounded mb-4">
                {message}
              </div>
            </div>
          )}
          <form
            onSubmit={submitHandler}
            className="max-w-[400px] w-full mx-auto bg-white shadow-lg p-4"
          >
            <h2 className=" text-6xl font-bold text-center py-6">JavaClub</h2>

            <div className="flex flex-col py-2 font-sans">
              <label>Name</label>
              <input
                required={true}
                className="border p-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col py-2 font-sans">
              <label>Email Address</label>
              <input
                required={true}
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
                required={true}
                className="border p-2 font-sans"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter you Password here"
              />
            </div>

            <div className="flex flex-col py-2 font-sans">
              <label>Confirm Password</label>
              <input
                required={true}
                className="border p-2 font-sans"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm you Password here"
              />
            </div>

            <button
              type="submit"
              className="font-sans border w-full my-5 py-2 btn-black text-white"
            >
              Register
            </button>
            <div className="font-sans">
              <p>
                Already have an account?
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : '/login'}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {' '}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
