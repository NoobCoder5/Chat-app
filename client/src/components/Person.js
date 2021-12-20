import React from 'react'

const Person = () => {
 
    return (
        <>
            <li class="flex py-4 first:pt-0  last:pb-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div class="ml-3  overflow-hidden">
                <p class="text-sm font-medium ">Heo losi</p>
                <p class="text-sm  truncate">courtney.henry@example.com</p>
              </div>
            </li>
        </>
    )
}

export default Person
