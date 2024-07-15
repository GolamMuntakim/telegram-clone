import { CiBookmark } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdDelete, MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { MdOutlineAnimation } from "react-icons/md";
import { FaFlag, FaGift, FaPen, FaRegBellSlash, FaRegCircleQuestion, FaTrash, FaVideo } from "react-icons/fa6";
import { IoMdBug } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BiMicrophone } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../src/Style.css'
import { FaArrowLeft, FaCheckCircle, FaRegHandPaper } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

import Mobile from "./Mobile";





// import bg from "../public/images/bg.JPG"

function App() {
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null);
  const [text, setText] = useState('')
  const [showSidebar, setShowSidebar] = useState(true);
  const [showTab, setShowTab] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  // const [chatss, setChatss] = useState([chats]);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const handleEditClick = () => {
    setShowSideNav(true);
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChats(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchChats();
  }, []);

  // console.log(chats)
  const getDayOfWeekAbbreviated = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  const handleChatHeadClick = (chat) => {
    setSelectedChat(chat);
    setShowSideNav(false)
  };
  const handleSmallChatHeadClick = (chat) => {
    setSelectedChat(chat);
    setShowSideNav(true)
  };
  const handletext = (e) => {
    setText(e.target.value)
    // console.log(e)
  }
  console.log(text)
  const toggleSidebarAndTab = () => {
    setShowSidebar(!showSidebar);
    setShowTab(!showTab);
    setSearchActive(!searchActive);
  };
  const formatDateToString = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toDateString();
  };

  //   const [theme, setTheme] = useState(()=>{
  //     return localStorage.getItem('theme') || 'light';
  // })

  // useEffect(() => {
  //   localStorage.setItem('theme', theme)
  //   const localTheme = localStorage.getItem('theme')
  //   document.querySelector('html').setAttribute('data-theme', theme)
  // }, [theme])
  useEffect(() => {
    // Step 2: Update localStorage and apply theme to html element
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]); // Effect runs whenever theme state changes

  const toggleTheme = () => {
    // Step 3: Toggle between 'light' and 'dark' themes
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <>
      <div className="hidden lg:flex">
        <div className="w-full fixed ">
          <div className="flex   ">
            <div className="w-[400px] ">
              <div>
                <div className="navbar bg-[#fefffe]">
                  <div className="navbar-start">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="">
                        {!searchActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                          </svg>
                        ) : (
                          <button onClick={toggleSidebarAndTab}><FaArrowLeft /></button>
                        )}
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content 
                      bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg
                       rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><a><CiBookmark />
                          Saved Masseges</a></li>
                        <li><a><IoMdContact />Contacts</a></li>
                        <li><a><MdOutlineSlowMotionVideo />
                          My Stories</a></li>
                        <li><a><CiSettings />
                          Settings</a></li>
                        <li><a><GoMoon />
                          Night Mode <div><input onClick={toggleTheme} type="checkbox" className="toggle theme-controller toggle-theme" defaultChecked /></div></a></li>
                        <li><a><MdOutlineAnimation />
                          Animation
                        </a></li>
                        <li><a><FaRegCircleQuestion />
                          Telegram Features</a></li>
                        <li><a><IoMdBug />
                          Report a Bug</a></li>
                        <li><a><span className="text-xl text-base-400">K</span> Switch To K Version</a></li>
                        <li><a><FaCirclePlus />Install App</a></li>
                        <li className="text-center text-sm mt-2">Telegram Web A 10.9.7</li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar-end">
                    <button onClick={toggleSidebarAndTab} className="">
                      <div className="mr-10">
                        <label className="input  flex items-center gap-2 rounded-full bg-[#f5f4f4]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 rounded-full">
                            <path
                              fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd" />
                          </svg>
                          <input type="text" className="w-[150px] rounded-full" placeholder="Search" />
                        </label>
                      </div>
                    </button>
                  </div>
                  <div>
                  </div>
                </div>

                <div id="tab" className={showTab ? "" : "hidden"}>

                  <Tabs className="custom-tabs">
                    <TabList className="custom-tab-list ">
                      <Tab className="custom-tab">Chats</Tab>
                      <Tab className="custom-tab">Channel</Tab>
                      <Tab className="custom-tab">Media</Tab>
                      <Tab className="custom-tab">Links</Tab>
                      <Tab className="custom-tab">Files</Tab>
                      <Tab className="custom-tab">Music</Tab>
                      <Tab className="custom-tab">Voice</Tab>
                    </TabList>
                    <TabPanel>
                      <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                  </Tabs>



                </div>
                <div id="sidebar"
                  className={showSidebar ? "hover:overflow-y-auto hover:max-h-[calc(100vh-80px)]" : "hidden"}
                >
                  {
                    chats.map((chat, idx) => (
                      <div
                        onClick={() => handleChatHeadClick(chat)}

                        style={{ cursor: "pointer" }} className="hidden lg:flex items-center gap-4 mt-4 pr-4" key={idx}>
                        <div className="ml-2">
                          <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                              <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between gap-10 w-56">
                          <div>
                            <h1>{chat?.sender?.name}</h1>
                            <h1>{chat?.message.slice(0, 20)}</h1>
                          </div>
                          <div>
                            <h1>{getDayOfWeekAbbreviated(chat?.created_at)}</h1>
                          </div>
                        </div>
                      </div>

                    ))
                  }
                  {
                    chats.map((chat, idx) => (
                      <div key={idx}
                        onClick={() => handleSmallChatHeadClick(chat)}
                        className={!showSideNav ? "flex" : "hidden"}
                      >
                        <div

                          style={{ cursor: "pointer" }} className="flex lg:hidden items-center gap-4 mt-4 pr-4" >
                          <div className="ml-2">
                            <div className="chat-image avatar">
                              <div className="w-10 rounded-full">
                                <img
                                  alt="Tailwind CSS chat bubble component"
                                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between gap-10 w-56">
                            <div>
                              <h1>{chat?.sender?.name}</h1>
                              <h1>{chat?.message.slice(0, 20)}</h1>
                            </div>
                            <div>
                              <h1>{getDayOfWeekAbbreviated(chat?.created_at)}</h1>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))
                  }

                </div>
              </div>

            </div>
            <div className="w-full h-screen hidden lg:block   bg-[url('/images/bg.JPG')] bg-cover">

              {
                selectedChat && (
                  <div id="main" className="h-screen w-full bg-cover sm:bg-[url('/images/bg.JPG')]">
                    <div className="navbar bg-base-100">
                      <div className="flex-1">

                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <a className=" text-xl">  {selectedChat?.sender?.name}
                          </a>
                          <br /> <span className="text-xs">Last Seen {formatDateToString(selectedChat?.created_at)} at {formatDateToString(selectedChat?.updated_at)}</span>
                        </div>

                      </div>
                      <div className="flex-none">
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="">
                            <div className="indicator">
                              <div className="flex items-center gap-8">
                                <IoSearch className="text-2xl" />
                                <IoCallOutline className="text-2xl" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                              <HiOutlineDotsVertical className="text-3xl" />
                            </div>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content
        bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg
        rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                              <a onClick={handleEditClick} className=""> <FaPen />Edit</a>
                            </li>
                            <li><a><FaVideo />Video Call</a></li>
                            <li><a><FaRegBellSlash />Mute...</a></li>
                            <li><a><FaCheckCircle />Select Masseges</a></li>
                            <li><a><FaFlag />Report</a></li>
                            <li><a><FaGift />Gift Premium</a></li>
                            <li><a><FaRegHandPaper />Block User</a></li>
                            <hr />
                            <li><a className="text-red-800"><FaTrash />Delete Chat</a></li>
                          </ul>
                        </div>
                      </div>
                      {showSideNav && (
                        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-[2]">
                          <div className="bg-white w-80 h-full">

                            <div className="p-4">
                              <div className="flex  gap-6">
                                <button
                                  className="   text-gray-600"
                                  onClick={() => setShowSideNav(false)}
                                >
                                  <FaArrowLeft />
                                </button>
                                <h2 className="text-xl font-bold ">Edit</h2>
                              </div>
                              <div>
                                <div className="chat-image avatar mt-8  flex  justify-center mx-auto">
                                  <div className="w-20 rounded-full ">
                                    <img
                                      alt="Tailwind CSS chat bubble component"
                                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>

                                </div>
                                <div className="text-center">
                                  <h1 className="font-bold mt-8"> {selectedChat?.sender?.name}</h1>
                                  <h1></h1>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>
                      )}
                    </div>


                    <div className="mt-52">
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="chat-header">
                          Obi-Wan Kenobi
                          <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">{selectedChat?.message}</div>
                        <div className="chat-footer opacity-50">Delivered</div>
                      </div>

                      <div className="chat chat-end">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="chat-header">
                          Anakin
                          <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                      </div>
                    </div>
                    <div>
                      <div id="down" className="flex items-center gap-8  fixed bottom-0 mb-8 justify-center ml-[200px]">
                        <div className="w-[400px] p-4 h-[50px] rounded-md flex justify-center items-center bg-white">
                          <h1>
                            <MdOutlineEmojiEmotions className="text-4xl" />
                          </h1>
                          <input
                            onChange={handletext}
                            type="text" name="text" placeholder="Massege" className="input border-none outline-none w-full max-w-xs focus:outline-none appearance-none" />
                          <h1 className="text-3xl">
                            <ImAttachment />
                          </h1>
                        </div>
                        <div className="bg-white p-3 rounded-full">
                          {
                            text?.length > 0 ? <IoSend className="text-3xl" />
                              : <BiMicrophone className="text-3xl" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              {
                selectedChat && (
                  <div id="main" className="h-screen w-full bg-cover sm:bg-[url('/images/bg.JPG')]">
                    <div className="navbar bg-base-100">
                      <div className="flex-1">

                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <a className=" text-xl">  {selectedChat?.sender?.name}
                          </a>
                          <br /> <span className="text-xs">Last Seen {formatDateToString(selectedChat?.created_at)} at {formatDateToString(selectedChat?.updated_at)}</span>
                        </div>

                      </div>
                      <div className="flex-none">
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="">
                            <div className="indicator">
                              <div className="flex items-center gap-8">
                                <IoSearch className="text-2xl" />
                                <IoCallOutline className="text-2xl" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                              <HiOutlineDotsVertical className="text-3xl" />
                            </div>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content
        bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg
        rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                              <a onClick={handleEditClick} className=""> <FaPen />Edit</a>
                            </li>
                            <li><a><FaVideo />Video Call</a></li>
                            <li><a><FaRegBellSlash />Mute...</a></li>
                            <li><a><FaCheckCircle />Select Masseges</a></li>
                            <li><a><FaFlag />Report</a></li>
                            <li><a><FaGift />Gift Premium</a></li>
                            <li><a><FaRegHandPaper />Block User</a></li>
                            <hr />
                            <li><a className="text-red-800"><FaTrash />Delete Chat</a></li>
                          </ul>
                        </div>
                      </div>
                      {showSideNav && (
                        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-[2]">
                          <div className="bg-white w-80 h-full">

                            <div className="p-4">
                              <div className="flex  gap-6">
                                <button
                                  className="   text-gray-600"
                                  onClick={() => setShowSideNav(false)}
                                >
                                  <FaArrowLeft />
                                </button>
                                <h2 className="text-xl font-bold ">Edit</h2>
                              </div>

                              <div>
                                <div className="chat-image avatar mt-8  flex  justify-center mx-auto">
                                  <div className="w-20 rounded-full ">
                                    <img
                                      alt="Tailwind CSS chat bubble component"
                                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>

                                </div>
                                <h1 className="text-center">  {selectedChat?.sender?.name} <br />
                                  <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                      
                                      <input type="text" className="grow" placeholder="First Name" />
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2 mt-2">
                                      <input type="text" className="grow" placeholder="Last Name" />
                                    </label> <br />
                                    <div className="flex justify-center gap-4">
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <h1>Notification <br />
                                    <p className="text-gray-500">Enabled</p> <br />
                                    <h1 className="text-red-800 flex justify-center items-center text-xl gap-6"><MdDelete />Deleted  Chat</h1>
                                    </h1>

                                    </div>
                                  </div>
                                </h1>
                              </div>


                            </div>
                          </div>
                        </div>
                      )}
                    </div>


                    <div className="mt-52">
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="chat-header">
                          Obi-Wan Kenobi
                          <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">{selectedChat?.message}</div>
                        <div className="chat-footer opacity-50">Delivered</div>
                      </div>

                      <div className="chat chat-end">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="chat-header">
                          Anakin
                          <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                      </div>
                    </div>
                    <div>
                      <div id="down" className="flex items-center gap-8  fixed bottom-0 mb-8 justify-center ml-[200px]">
                        <div className="w-[400px] p-4 h-[50px] rounded-md flex justify-center items-center bg-white">
                          <h1>
                            <MdOutlineEmojiEmotions className="text-4xl" />
                          </h1>
                          <input
                            onChange={handletext}
                            type="text" name="text" placeholder="Massege" className="input border-none outline-none w-full max-w-xs focus:outline-none appearance-none" />
                          <h1 className="text-3xl">
                            <ImAttachment />
                          </h1>
                        </div>
                        <div className="bg-white p-3 rounded-full">
                          {
                            text?.length > 0 ? <IoSend className="text-3xl" />
                              : <BiMicrophone className="text-3xl" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
      <div className="flex full lg:hidden ">
        <Mobile className="w-full"></Mobile>
      </div>
    </>
  )
}

export default App
