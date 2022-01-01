import React from 'react'

const Message = (props) => {
    return (
        <>
            <div class={`group flex  m-2 ${props.sender == "me" ? "justify-start" : "justify-end" } `}>
            <img
              class="shrink-0  h-12 w-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowos5MZ39GXVJWBqN2-CMvuR3UPoxDbhoRCeeUP18VtTCVkizW3RsF-uTYA6Qk29xF3Q&usqp=CAU"
              alt=""
            />
            <div class="px-2  max-w-xs">
              <p class="text-sm font-medium  text-white ">
                {props.sender}
              </p>
              <p class="text-sm font-medium text-gray-500 ">
                
              </p>
              <div className="border-solid m-1 border max-w-xs p-2 rounded-lg border-gray-700">
                {props.message}
              </div>
            </div>
          </div> 
        </>
    )
}

export default Message
