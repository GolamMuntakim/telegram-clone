import { CiBookmark } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { MdOutlineAnimation } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
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
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";





// import bg from "../public/images/bg.JPG"

function App() {
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null);
  const [text, setText] = useState('')
  const [showSidebar, setShowSidebar] = useState(true);
  const [showTab, setShowTab] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const handleEditClick = () => {
    setShowSideNav(true);
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChats(data.data); // Assuming the response data is an array of chats
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchChats();
  }, []);

  // console.log(chats)
  const getDayOfWeekAbbreviated = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short' }; // 'short' gives abbreviated format like "Mon"
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  const handleChatHeadClick = (chat) => {
    setSelectedChat(chat);
  };
  const handletext = (e) => {
    setText(e.target.value)
    // console.log(e)
  }
  // console.log(text.length)
  const toggleSidebarAndTab = () => {
    setShowSidebar(!showSidebar);
    setShowTab(!showTab);
    setSearchActive(!searchActive);
  };

  return (
    <>
      <div className="w-full fixed">
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
                      className="menu menu-sm dropdown-content bg-[#fefffe] bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                      <li><a><CiBookmark />
                        Saved Masseges</a></li>
                      <li><a><IoMdContact />Contacts</a></li>
                      <li><a><MdOutlineSlowMotionVideo />
                        My Stories</a></li>
                      <li><a><CiSettings />
                        Settings</a></li>
                      <li><a><GoMoon />
                        Night Mode <input type="checkbox" className="toggle" defaultChecked /></a></li>
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
              {/*  */}
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

                    <div onClick={() => handleChatHeadClick(chat)}
                      style={{ cursor: "pointer" }} className="flex items-center gap-4 mt-4 pr-4" key={idx}>
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
              </div>
            </div>

          </div>
          <div className="w-full h-screen  ">
            <div id="main" className="h-screen w-full bg-[url('/images/bg.JPG')] bg-cover">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">  {selectedChat?.sender?.name}</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <HiOutlineDotsVertical className="text-3xl"/>
          {/* <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a onClick={handleEditClick} className="justify-between">
            Edit
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  {showSideNav && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-[2]">
          <div className="bg-white w-80 h-full">
            {/* Side nav content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Edit Options</h2>
              {/* Add your edit options here */}
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setShowSideNav(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
</div>


              {selectedChat?.sender?.name}
              <div>
                <div id="down" className="flex items-center gap-8  fixed bottom-0 justify-center ml-[200px]">
                  <div className="w-[400px] p-4 h-[50px] rounded-md flex justify-center items-center bg-white">
                    <h1>
                      <MdOutlineEmojiEmotions className="text-4xl" />
                    </h1>
                    <input
                      onChange={handletext}
                      //  onSubmit={handletext}
                      type="text" name="text" placeholder="Massege" className="input border-none outline-none w-full max-w-xs focus:outline-none appearance-none" />
                    <h1 className="text-3xl">
                      <ImAttachment />
                    </h1>
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    {
                      text.length > 0 ? <IoSend className="text-3xl" />
                        : <BiMicrophone className="text-3xl" />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
