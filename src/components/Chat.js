import React from 'react'
import SignOut from './SignOut.js'
import {useState, useEffect, useRef} from 'react';
import {auth, db } from '../firebase.js';
import SendMessage from './SendMessage.js';








function Chat() {
    const scroll = useRef() // aşağıya kaydırırken smooth bir geçiş için kullanılacak scroll öğesinin render etmeden mutable tutulmasını sağlayan yapı
    const [messages,setMessages] = useState([])


    // Her mesajda render edilmesi için kullanılan useEffect hooku ve mesaj öğelerinin işlenmesi
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(70).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])

  return (
    <div>
            <SignOut/>
        
         <div className="msgs">
                {messages.map(({ id, text, photoURL, uid, displayName}) => ( // Gönderilmiş mesajların databaseden siteye işlenmesi için kullanılan map fonksiyonu 
                    
                    <div>                               
                        <div key={id} className={`msg ${auth.currentUser.uid === uid ? 'sent' : 'received'}`}>
                           <img src={photoURL} alt="" />
                            <p> <b>{displayName}:</b> {text}</p>
                        </div>
                    </div>
                ))}
            </div>
                    

        <SendMessage scroll = {scroll}/>
         <div ref={scroll}></div>
    </div>
   

  )
}

export default Chat
