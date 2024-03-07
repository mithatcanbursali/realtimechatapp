import Button from '@mui/material/Button';
import React from 'react'
import {auth} from '../firebase.js'

// Firebase signOut fonksiyonu ile çıkış yapmamızı sağlayacak basit bir button componenti

function SignOut() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: 'white', top: 0, borderBottom: 'solid 1px lightgray ', zIndex: '10'
  }}>
        <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }}  onClick={()=> auth.signOut()}>CIKIS YAP</Button>
    </div>
  )
}

export default SignOut