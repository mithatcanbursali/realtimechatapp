import React from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'
import './styles/SignIn.css'
import MyImage from "../google.png"
import {useState} from 'react'
import { Typography } from '@mui/material';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignIn() {



  /* Google ile giriş için kullanılacak olan auth ve Firebase ile gelen provider fonksiyonu */
    function signInWithGoogle() {

        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }



    const [signInCheck,setSignInCheck] = useState(true) // Sitedeki üye oldunuzmu-zaten üye misiniz butonunu kontrol eden state

    const [authData,setAuthData] = useState({email:'',password:''})

    const onChangeFunc = (e) => {
      setAuthData({...authData,[e.target.name] : e.target.value})
    }


  
    const registerOrLoginWithEmail = () => {

      // Eğer zaten üyeyse sign in yapılacak default Firebase signinwithemailandpassword fonksiyonu
      if(signInCheck){
   signInWithEmailAndPassword(auth, authData.email, authData.password)
  .then((userCredential) => {
  })
  .catch((error) => {
    const errorMessage = error.message;
      
    alert(errorMessage);


  });
      }
      else{

      // Eğer zaten üyeyse sign in yapılacak default Firebase registerwithemailandpassword fonksiyonu
      createUserWithEmailAndPassword(auth, authData.email, authData.password)
      .then((userCredential) => {

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }
    }
  
  return (

    

    /* Google ile giriş için kullanılacak butonun yapısı ve tasarımı */
    <div className='main'>
    <div className='main-container'>
      <div className = 'email-container'>
            <Input name ='email' type = 'e-mail' placeholder = 'e-mail adresinizi giriniz:' onChange={onChangeFunc}></Input>
            <Input name = 'password' type = 'password' placeholder = 'sifrenizi giriniz:' onChange={onChangeFunc}></Input>
    <div className = 'login-container'>
    <Button onClick={registerOrLoginWithEmail} style={{ fontSize: '15px', borderRadius: '0', fontWeight: '500', color: 'black' }}>{signInCheck ? 'GİRİŞ YAP' : 'KAYIT OL'}</Button>
    <Button style={{  fontSize: '15px', borderRadius: '0', fontWeight: '500', color: 'black' }} onClick={signInWithGoogle}><img className = 'google' src={MyImage} alt=''></img> {signInCheck ? 'GOOGLE ILE GIRIŞ YAP' : 'GOOGLE ILE KAYIT OL'}</Button>
    </div>
      </div>
      <div className='register-container'>
      <Typography style={{ fontSize: '15px', borderRadius: '0', fontWeight: '500', color: 'rgb(183, 0, 0)' }} onClick={() => setSignInCheck(!signInCheck)}>{signInCheck ?  'ÜYE DEĞİL MİSİNİZ?' : 'ZATEN ÜYE MİSİNİZ?' }</Typography>
      </div>
    </div>
    </div>
  )
}

export default SignIn