import PhoneIcon from "@mui/icons-material/Phone";
import { Avatar } from "@mui/material";
import { useState } from "react";
import stringAvatar from "../../helpers/helpers";
import WebRTC from "../WebRTC/WebRTC";
import "./RoomMembersList.scss";

const RoomMembersListItem = (props) => {
  const {
    user,
    id,
    name,
    avatar,
    isUser,
    isFriend,
    sendFriendRequest,
    toggleDirectMessage,
  } = props;
  const [call, setCall] = useState(false);

  const makeCall = () => {
    setCall(!call);
  };

  const friendOptions = (isFriend) => {
    return isFriend ? (
      <div className="member-list-user-options">
        {/* <TextsmsIcon className="member-text-chat" onClick={} /> */}
        <PhoneIcon className="member-call-chat" onClick={() => makeCall(id)} />
        {call && <WebRTC makeCall={makeCall} />}
      </div>
    ) : (
      <div className="member-list-user-options">
        {/* <PersonAddAlt1Icon
          className="member-list-add"
          onClick={() => {
            sendFriendRequest(user.id, id);
          }}
        /> */}
        <PhoneIcon className="member-call-chat" onClick={() => makeCall(id)} />
        {call && <WebRTC makeCall={makeCall} />}
      </div>
    );
  };

  return (
    <div className="member-list-item">
      <div className="member-list-user-info">
        {avatar ? (
          <img src={avatar} alt="" className="member-list-icon" />
        ) : (
          <Avatar {...stringAvatar(name)} className="member-list-icon" />
        )}

        {name}
      </div>
      {!isUser && friendOptions(isFriend)}
    </div>
  );
};

export default RoomMembersListItem;
