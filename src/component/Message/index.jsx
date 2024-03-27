import React from "react";
import "./Message.css";
import { IconButton } from "component-craftsman";
import { Icons } from "../../icons";
import { theme } from "../rawdata";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../config";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import { UserImage } from "../../assets";

const Message = () => {
  const navigation = useNavigate();
  const { token, LoggedUserData } = React.useContext(AuthContext);
  const [query, setQuery] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [activeChat, setActiveChat] = React.useState(null);

  console.log("LoggedUserData:", LoggedUserData);

  React.useLayoutEffect(() => {
    fetchIfUser();
  }, [window.location.search, navigation]);

  const fetchIfUser = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.get("query");
    try {
      const data = JSON.parse(queryString);
      if (data) {
        const response = await axios.get(`${BASE_API}/common/profile/${data}`);
        setQuery(response.data.user);
      }
    } catch (error) {
      console.error("Error parsing query parameter:", error);
    }
  };

  // console.log(query);

  React.useLayoutEffect(() => {
    if (token) {
      fetchUsersAndMessage();
    }
  }, [token]);

  const fetchUsersAndMessage = async () => {
    try {
      const response = await axios.get(
        `${BASE_API}/common/message/conversations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setMessages(response.data.conversations);
      }

      console.log(response.data.conversations);
    } catch (error) {
      console.log("failed to get the messages:", error);
    } finally {
    }
  };

  return (
    <div class="wrapper">
      <div class="container-message">
        <div class="left">
          <div class="top">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="form-control py-4"
              />
              <IconButton
                effect="jaques"
                icon={Icons.PersonSearchIcon}
                bg={1}
              />
            </div>
          </div>
          <ul class="people">
            {messages?.map((data, index) => (
              <React.Fragment key={index + Math.random()}>
                {data?.participants?.map((part, i) => (
                  <React.Fragment key={index * i + Math.random()}>
                    {LoggedUserData?._id !== part._id && (
                      <li
                        class="person"
                        data-chat=""
                        onClick={() => setActiveChat(messages)}
                      >
                        <img
                          src={part?.personal?.image || UserImage}
                          alt=""
                          className=" object-fit-cover"
                        />
                        <span class="name">{part?.name}</span>
                        <span class="time">2:09 PM</span>
                        <span class="preview">I was wondering...</span>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div class="right">
          <div class="top">
            <span>
              To: <span class="name">Dog Woofson</span>
            </span>
          </div>
          <div class="chat">
            <div class="conversation-start">
              <span>Today, 6:48 AM</span>
            </div>
            <div class="bubble you">Hello,</div>
            <div class="bubble you">it's me.</div>
            <div class="bubble me">I was wondering...</div>
          </div>
          <div class="write">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Message.."
              />
              <button
                className="btn text-white"
                style={{ backgroundColor: theme }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
