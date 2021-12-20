import React from 'react'

const Message = (props) => {
    return (
        <>
            <div class={`group flex  m-2 ${props.position} `}>
            <img
              class="shrink-0  h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="px-2  max-w-xs">
              <p class="text-sm font-medium  text-gray-700 group-hover:text-gray-900">
                jeloosdf
              </p>
              <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                dfjsocooc
              </p>
              <div className="border-solid m-1 border max-w-xs p-2 rounded-lg border-gray-700">
                  jsdkfjk djkfjsd  jdksfjsdkfld fds kfdsjfl
                  jsdkfjk djkfjsd  jdksfjsdkfld fds kfdsjfl
                  jsdkfjk djkfjsd  jdksfjsdkfld fds kfdsjfl

              </div>
            </div>
          </div> 
        </>
    )
}

export default Message
