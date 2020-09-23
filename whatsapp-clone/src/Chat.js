import React, { useEffect, useState } from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {};

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && " chat_reciever"}`}>
          <span className="chat_name">Ulum Cantikk</span>
          Haii guys
          <span className="chat_timestamp">4:23</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;
