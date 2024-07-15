import { useEffect, useRef, useState } from "react";
import { BiMicrophone } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBookmark, CiCircleQuestion, CiSearch, CiSettings } from "react-icons/ci";
import { FaArrowLeft, FaMapLocationDot, FaPhone, FaPlus } from "react-icons/fa6";
import { GrClearOption } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdContacts, IoMdMenu, IoMdSearch } from "react-icons/io";
import { IoCallSharp, IoSend } from "react-icons/io5";
import { MdDelete, MdGroups2, MdOutlineEmojiEmotions, MdWallpaper } from "react-icons/md";
import { VscUnmute } from "react-icons/vsc";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../src/MobileStyle.css"
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";

const Mobile = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [showChatHeads, setShowChatHeads] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [text, setText] = useState('')
  const [showSideNav, setShowSideNav] = useState(false);
  const sideNavRef = useRef(null);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setShowSideNav(false);
      }
    };

    if (showSideNav) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showSideNav]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handletext = (e) => {
    setText(e.target.value)
  }
  const handleEditClick = (chat) => {
    setShowSideNav(true);
    setSelectedChat(chat)
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChats(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChats();
  }, []);

  const handleChatBarClick = (chat) => {
    setSelectedChat(chat);
    setIsMainVisible(true);
    setShowChatHeads(false);
  };
  const handleBackToChats = () => {
    setSelectedChat(null);
    setShowChatHeads(true);
  };
  const formatDateToString = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toDateString();
  };
  const getDayOfWeekAbbreviated = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])
  const handleTogglee = e => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))

  }

  return (

    <div className="w-full" >
      {showChatHeads ? (

        <div>
          <div id="bar" className="w-full bg-[#3390ec] p-4 fixed  top-0 z-10 flex justify-between">
            <div className="flex gap-4 items-center">
              <IoMdMenu onClick={handleEditClick} id="sidenav" className="text-white" />
              <h1 className="text-xl font-semibold text-white">Telegram</h1>
            </div>
            <div>
              {showSideNav && (
                <div className="side-nav fixed inset-0 flex items-center justify-start bg-white bg-opacity-50 z-[2]">
                  <div ref={sideNavRef} className="bg-white w-80 h-full transition-all duration-1000">

                    <div className="p-4 bg-[#3390ec] h-[218px]">
                      <div className="flex items-center gap-40">
                        <div className="chat-image avatar mt-8  ">
                          <div className="w-14 rounded-full ">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>

                        </div>

                        <div>
                          <label className="swap swap-rotate text-white">
                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleTogglee} type="checkbox" className="theme-controller" />

                            {/* sun icon */}
                            <svg
                              className="swap-on h-10 w-10 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                              className="swap-off h-10 w-10 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="mt-10">
                        <div>
                          <div className="">
                            <details className=" ">
                              <summary className="btn bg-[#3390ec] border-none ">
                                <div className="flex items-center gap-24 ">
                                  <div className="text-white ">
                                    <h1 className="font-bold">Golam Muntakim </h1>
                                    <p className="mt-2">+8801798751857</p>
                                  </div>
                                  <div className="text-white"> <IoIosArrowDown className="text-3xl text-white font-bold" /></div>
                                </div>
                              </summary>
                              <ul className="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2  mt-10">
                                <li><a>Golam Muntakim </a></li>
                                <li><a className="flex gap-4 items-center mt-4"><FaPlus />Add Account</a></li>
                              </ul>
                            </details>

                          </div>

                        </div>

                        <div>

                          <h1 className="flex items-center gap-8 mt-10"><CgProfile className="text-2xl" />My Profile </h1>
                          <hr className="mt-4" />
                          <h1 className="flex items-center gap-8 mt-2"><MdGroups2 className="text-2xl" />New Group</h1>
                          <h1 className="flex items-center gap-8 mt-2"><IoMdContacts className="text-2xl" />Contact</h1>
                          <h1 className="flex items-center gap-8 mt-2"><IoCallSharp className="text-2xl" />Calls</h1>
                          <h1 className="flex items-center gap-8 mt-2"><FaMapLocationDot className="text-2xl" />People Nearby</h1>
                          <h1 className="flex items-center gap-8 mt-2"><CiBookmark className="text-2xl" />Saved Message</h1>
                          <h1 className="flex items-center gap-8 mt-2"><CiSettings className="text-2xl" />Settings</h1>
                          <hr className="mt-8" />
                          <h1 className="flex items-center gap-8 mt-2"><FaUserFriends className="text-2xl" />Invite Friends</h1>
                          <h1 className="flex items-center gap-8 mt-2"><CiCircleQuestion className="text-2xl" />Invite Friends</h1>
                        </div>

                      </div>

                    </div>


                  </div>
                </div>
              )}
            </div>
            <div>
              <IoMdSearch className="text-white" />
            </div>
          </div>
          <div className="mt-20">
            <Tabs className="">
              <TabList className="flex gap-6 overflow-x-auto hover:border-b-2 selected:border-b-[#3390ec] ">
                <Tab className="border-b-2 border-b-transparent">Chats</Tab>
                <Tab className="border-b-2 border-b-transparent">Channel</Tab>
                <Tab className="border-b-2 border-b-transparent">Media</Tab>
                <Tab className="border-b-2 border-b-transparent">Links</Tab>
                <Tab className="border-b-2 border-b-transparent">Files</Tab>
                <Tab className="border-b-2 border-b-transparent">Music</Tab>
                <Tab className="border-b-2 border-b-transparent">Voice</Tab>
              </TabList>
              <TabPanel>
                <div className="">
                  {chats.map((chat, idx) => (
                    <div
                      onClick={() => handleChatBarClick(chat)}
                      style={{ cursor: "pointer" }}
                      className="flex items-center gap-4 mt-4  w-full overflow-y-auto "
                      key={idx}
                      id={`chatBar-${chat.id}`}
                    >
                      <div className="ml-2">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS chat bubble component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-10 w-full">
                        <div className="flex w-full">
                          <div className="w-full">
                            <h1>{chat?.sender?.name}</h1>
                            <p>{chat.message.slice(0, 20)}</p>
                          </div>
                          <h1 className="">{getDayOfWeekAbbreviated(chat?.created_at)}</h1>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>

        </div>
      ) : (
        <div>
          <div className="flex items-center gap-4 bg-[#3b92ec] p-2 ">
            <div onClick={handleBackToChats} style={{ cursor: "pointer" }}>
              <h1><FaArrowLeft className="text-white" /></h1>
            </div>
            <div className="flex gap-2">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-white">{selectedChat?.sender?.name}</h1>
                <span className="text-xs text-white">
                  Last Seen{" "}
                  {formatDateToString(selectedChat?.created_at)} to{" "}
                  {formatDateToString(selectedChat?.updated_at)}
                </span>
              </div>
              <div className="flex items-center gap-6 ml-4">
                <FaPhone className="text-white" />
                <BsThreeDotsVertical className="text-white" onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
          {sidebarOpen && (
            <div className={`sidebar bg-white p-4 right-0 top-12 absolute z-10 rounded-md transition-all duration-1000
             ${sidebarOpen ? 'top-0' : 'top-20'}
             `}>
              <h2 className="flex gap-2 items-center"><VscUnmute />Mute<IoIosArrowForward className="ml-4" /></h2>
              <hr className="mt-2 font-bold text-2xl" />
              <h2 className="flex gap-2 items-center mt-2"><CiSearch />Search</h2>
              <h2 className="flex gap-2 items-center mt-2"><MdWallpaper />Change Wallpaper</h2>
              <h2 className="flex gap-2 items-center mt-2"><GrClearOption />Clear History</h2>
              <h2 className="flex gap-2 items-center mt-2"><MdDelete />Delete Chat</h2>
            </div>
          )}

          <div className="bg-[url('/images/bg.JPG')] min-h-screen ">
            <div>
              <div className="pt-[350px]">
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
              {/* <div id="text" className="bg-white bottom-0 fixed w-full p-4">h</div> */}
              <div id="down" className="flex items-center gap-8  fixed bottom-0  justify-center w-full">
                <div className="w-full p-4 h-[50px]  flex justify-center items-center bg-white">
                  <h1>
                    <MdOutlineEmojiEmotions className="text-4xl text-[#939599]" />
                  </h1>
                  <input
                    onChange={handletext}
                    type="text" name="text" placeholder="Massege" className="input border-none outline-none w-full max-w-xs focus:outline-none appearance-none text-[#939599]" />
                  <h1 className="text-3xl">
                    <ImAttachment className="text-[#939599]" />
                  </h1>
                  <div className="">
                    {
                      text?.length > 0 ? <IoSend className="text-3xl text-[#939599]" />
                        : <BiMicrophone className="text-3xl text-[#939599]" />
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="main">

          </div>

        </div>
      )}
    </div>
  );
};

export default Mobile;




