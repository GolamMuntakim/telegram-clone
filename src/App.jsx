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
// import bg from "../public/images/bg.JPG"

function App() {
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null);
  
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

console.log(chats)
const getDayOfWeekAbbreviated = (timestamp) => {
  const date = new Date(timestamp);
  const options = { weekday: 'short' }; // 'short' gives abbreviated format like "Mon"
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
const handleChatHeadClick = (chat) => {
  setSelectedChat(chat);
};

  return (
    <>
      <div className="w-full ">
        <div className="flex   ">
          <div  className="w-[400px] ">
            <div>
              <div className="navbar bg-[#fefffe]">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-[#fefffe] rounded-box z-[1] mt-3 w-52 p-2 shadow ">
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
                        Animation</a></li>
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
                  <button className="btn btn-ghost btn-circle">
                    <div className="mr-52">
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
                        <input type="text" className="w-[200px] rounded-full" placeholder="Search" />
                      </label>
                    </div>
                  </button>
                </div>
                <div>
                </div>
              </div>
            {/*  */}
          <div id="sidebar" className="hover:overflow-y-auto max-h-[calc(100vh-80px)] ">
          {
              chats.map((chat,idx)=>(
               
                 <div  onClick={() => handleChatHeadClick(chat)} 
                 style={{ cursor: "pointer" }}  className="flex items-center gap-4 mt-4 pr-4" key={idx}>
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
                  <h1>{chat?.message.slice(0,20)}</h1>
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
            <div id="main" className=" h-screen w-full bg-[url('/images/bg.JPG')] bg-cover">
            {selectedChat?.sender?.name}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
