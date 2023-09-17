import React ,{forwardRef} from 'react'

import "./Message.css"
const Message = forwardRef(({username , message} , ref) => {
   const isUser = username === message.username ;
   return (
      <div ref={ref} className={`message ${isUser && 'message__user'}`}>
         <div className={isUser ? 'message__userCard' : 'message__questCard' }>
            {message.username} : {message.text}
         </div>
      </div>
   )
})
export default Message