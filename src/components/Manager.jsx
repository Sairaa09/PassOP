import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  useEffect(() => {
    let pass = localStorage.getItem("passwords");

    if (pass) {
      setsavePassword(JSON.parse(pass));
    }
  }, []);

  let imgRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passType, setpassType] = useState("password");
  const [isMasked, setIsMasked] = useState(true);

  const [savePassword, setsavePassword] = useState([]);

  const showPassord = () => {
    // console.log(imgRef.current.src);
    if (imgRef.current.src.includes("eye.svg")) {
      imgRef.current.src = "icons/eyecross.svg";
      setpassType("text");
    } else {
      imgRef.current.src = "icons/eye.svg";
      setpassType("password");
    }
  };

  const addPassword = () => {
 if(form.site.length>3 && form.username.length >3 && form.password.length>3){
  setsavePassword([...savePassword, form]);
  localStorage.setItem("passwords", JSON.stringify([...savePassword, form]));
  // console.log([...savePassword,form]);
  setform({ site: "", username: "", password: "" });
  toast("Password Saved", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
 }else{
  toast("Password not Saved", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
 }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const editPassword = (index) => {
    let edit = savePassword[index];
    setform({
      site: edit.site,
      username: edit.username,
      password: edit.password,
    });
    let deleteItem = [...savePassword];
    deleteItem.splice(index, 1);
    setsavePassword(deleteItem);
    localStorage.setItem("passwords", JSON.stringify(deleteItem));
    toast("Password Edited", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deletePassword = (index) => {
    let confirmation= confirm("Are you sure you want to delete it?")
   if(confirmation){
    let deleteItem = [...savePassword];
    deleteItem.splice(index, 1);
    setsavePassword(deleteItem);
    localStorage.setItem("passwords", JSON.stringify(deleteItem));
    toast("Password deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
   }
  };
// console.log(savePassword);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"/>
      <ToastContainer/>

     
        <div className=" min-h-[100vh]   lg:px-40 ">
          <h1 className="text-4xl font-bold  text-center  px-4">
            <span className="text-purple-700">&lt;</span>
            <span className="">Pass</span>
            <span className="text-purple-700">OP/&gt;</span>
          </h1>
          <p className="text-purple-900 text-md text-center  px-4">
            Your own Password Manager
          </p>
          <div className="  flex flex-col p-4 gap-5 lg:gap-8 items-center   px-4">
            <input
              value={form.site}
              onChange={(e) => handleChange(e)}
              placeholder="Enter website URL"
              type="text"
              className="rounded-full border border-purple-500 w-full text-black p-4 py-1 "
              name="site"
            />
            <div className="flex w-full justify-between lg:gap-8 md:flex-row flex-col gap-5 ">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                type="text"
                className="rounded-full border border-purple-500 w-full text-black p-4 py-1"
                name="username"
              />
              <div className="password rounded-full border border-purple-500 md:w-1/2  flex relative ">
                <input
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type={passType}
                  className="text-black px-4 py-1 rounded-full w-full"
                  name="password"
                />
                <img
                  src="icons/eye.svg"
                  alt="eye"
                  className="w-[19px] absolute right-[11px] top-[7px] cursor-pointer "
                  onClick={showPassord}
                  ref={imgRef}
                />
              </div>
            </div>

            <button
              onClick={addPassword}
              className="flex item-center justify-center border border-purple-900 bg-purple-500 hover:bg-purple-400 rounded-full p-2 px-4 w-fit text-lg cursor-pointer"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Save 
            </button>
          </div>
          <h1 className="font-bold text-xl px-2">Your Passwords </h1>
       
          {savePassword == 0 && <div className="p-3">No Passwords to show</div>}
          {savePassword != 0 && (
            <table className="table-fixed w-full rounded-xl  overflow-hidden mt-2 ">
              <thead className="bg-purple-700 text-white md:text-xl">
                <tr>
                  <th className="px-2">Site</th>
                  <th className="px-2">Username</th>
                  <th className="px-2">Password</th>
                  <th className="px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {savePassword.map((item, index) => {
                  return (
                    <tr
                      className="w-full border border-white border-x-transparent "
                      key={index}
                    >
                      <td className=" px-2 text-center py-2 border border-purple-300  ">
                        <div className="flex items-center justify-center flex-wrap">
                          <a href={item.site} target="-blank" className=" truncate" >
                            <span >{item.site}</span>
                          </a>
                          <div
                            onClick={() => {
                              copyText(item.site);
                            }}
                            className="  cursor-pointer pl-2 pt-2 flex justify-center items-center"
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className=" px-2 text-center py-2 border border-purple-300  ">
                        <div className="flex items-center justify-center flex-wrap">
                          <span className=" truncate">{item.username}</span>
                          <div
                            onClick={() => {
                              copyText(item.username);
                            }}
                            className=" cursor-pointer pl-2 pt-2 flex justify-center items-center"
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" px-2 text-center py-2 border border-purple-300  ">
                        <div className="flex items-center justify-center flex-wrap">
                          <span className=" truncate">
                          {isMasked ? "•".repeat(item.password.length) : item.password}
                          </span>
                          <div
                            onClick={() => {
                              copyText(item.password);
                            }}
                            className=" cursor-pointer pl-2 pt-2 flex justify-center items-center"
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" px-2 text-center py-2 border border-purple-300  ">
                        <span
                          className="md:px-2 cursor-pointer"
                          onClick={() => {
                            editPassword(index);
                          }}
                        >
                          <lord-icon
                            style={{ width: "25px", height: "25px" }}
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                        <span
                          className="md:px-2 cursor-pointer"
                          onClick={() => {
                            deletePassword(index);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
     
    </>
  );
};

export default Manager;
