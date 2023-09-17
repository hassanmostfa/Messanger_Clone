import React, { useState , useEffect } from 'react'
import "./App.css"
import Message from './components/Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input , setInput] = useState("") ;
  const [messages , setMesages] = useState([
    {username : "Hassan" , text : "How Are You ?!"},
    {username : "Ahmed" , text : "I am fine thanks!"},
    {username : "Ahmed" , text : " What is your nationality ?!"},
  ]) ;
  const [username , setUsername] = useState('') ;

  // useState = variable in react
  // useEffect = run code on a condition in react

  // console.log(input);
  // console.log(messages);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"))
  }, [])
  

  const sendMessage = (e) =>{
    e.preventDefault() ;
    if (input.length !== 0) {
      setMesages([...messages , {username : username , text : input}]) ;
      setInput('');
    }

  }
  return (
    <div>
      <img src='/images/messenger_5968771.png' alt='no'/>
      <h1>Messanger Clone</h1>
      <h2>Welcome {username}</h2>
      <div className='form'>
        <form>
          {/* input field */}
          <input placeholder='Enter A Message...' className='message__input' value={input} onChange={e => setInput(e.target.value)}/>
          {/* Send Button */}
          <SendIcon className='send__btn' onClick={sendMessage}>Send Message</SendIcon>
        </form>
      </div>
      <FlipMove>
        {/* show mesages */}
        {messages.map(message => <Message username={username} message={message}/>)}
      </FlipMove>
    </div>
  )
}


export default App;
