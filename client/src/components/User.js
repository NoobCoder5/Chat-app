import React, { useState } from "react";

const User = () => {
  const [img, setimg] = useState([]);
  async function handleChange(e) {
    const selected = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      setimg(reader.result);
    };
    reader.readAsDataURL(selected);
  }
  return (
    <>
      <div className="border-solid border m-auto mt-14 h-3/5  w-2/5 rounded-lg border-gray-700">
        <form class="flex items-center space-x-6">
          <div class="shrink-0">
            <img
              class="h-16 w-16 object-cover rounded-full"
              style={{
                backgroundImage: img ? `url("${img}")  ` : "blue",
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundposition: "center",
                backgroundrepeat: "no-repeat"
              }}
              //   src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
              }}
              class="block file:border file:border-solid w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default User;
