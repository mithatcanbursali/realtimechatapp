/* author @mithatcanbursali
*/

import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn.js'
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth';




// Render edilecek olan ana function component 
function App() {
  
  const [isSignedIn] = useAuthState(auth)


  return (
    <div>
      {/* isSignedIn ile girişi kontrol edip chat ekranına yönlendirecek olan ternary operatörü*/}
      {isSignedIn ? <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
