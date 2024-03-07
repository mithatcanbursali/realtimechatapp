import React from 'react'
import Input from '@mui/material/Input';
import {useState} from 'react';
import {db,auth} from '../firebase.js'
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';

function SendMessage({ scroll }) {
    const [msg,setMsg] = useState('')
    
    async function sendMessage(e){
        e.preventDefault()

        // Giriş/kayıt yapmış kullanıcıdan gereken bilgileri depolamak
        const {uid,photoURL,displayName} = auth.currentUser
        


// E-Mail kullanılarak kayıt/giriş yapılmışsa Firebasedeki 'messages' collectionuna eklenecek kısım
        if (auth.currentUser.photoURL === null){

            const display = auth.currentUser.email.split("@") //@li kısımdan önceki isimi almak için kullanılan string fonksiyonu

            await db.collection('messages').add({
                text: msg,
                photoURL: 'https://icon-library.com/images/google-user-icon/google-user-icon-21.jpg', // default profil resmi
                uid,
                displayName: display[0], // @li kısımdan önceki kısmı displayName'e passlemek
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

        // Google ile giriş yapılmışsa collectiona eklenecek kısım
        else{
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })}
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
            <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} type ='text' value={msg} onChange={e => setMsg(e.target.value)} placeholder='Mesajınızı girin...'></Input>
            <Button style = {{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}}  type='submit'>GONDER</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage