import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import message from '../components/Message';
import Loader from '../components/Loader';
import {login} from '../action/userAction';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <div>LoginScreen</div>;
};

export default LoginScreen;
