import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import loginImg from '../assets/loginImg.jpg';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
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
      <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>

    <div className="login-card-container">   
        <div className="login-card">
        {error && (
            <div className="flex justify-center ">
              <div className="bg-[#d82f424a] text-red p-2 text-center max-w-[25rem] font-sans rounded mb-4">
                {<Message />}
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
            <div className="login-card-header text-5xl">
                <h1 className=''>Sign Up</h1>
            </div>
            <form className="login-card-form" onSubmit={submitHandler}>
              
                <div className="form-item font-lato">
                    <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
                </div>

                <div className="form-item font-lato">
                    <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" id="emailForm" required />
                </div>

                <div className="form-item font-lato">  
                    <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" id="passwordForm" required />
                </div>

                <div className="form-item font-lato">  
                    <input type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" id="passwordForm" required />
                </div>



                <div className="form-item-other">
                </div>
                <button className='btn-black' type="submit">Sign Up</button>
            </form>
            <div className="login-card-footer">
                Do have an account? <Link
                  to={redirect ? `/login?redirect=${redirect}` : '/login'}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {' '}
                  Login
                </Link>
            </div>
            <div className="login-card-social font-lato">
                <div>Other Sign-In Options</div>
                <div className="login-card-social-btns">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                        </svg>
                    </a>

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
