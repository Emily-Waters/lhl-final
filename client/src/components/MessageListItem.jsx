import classNames from "classnames";
import "../styles/MessageListItem.scss";

// TODO: MessageListItem will render individual messages showing a user avatar, user name, message content and the time the message was posted. Messages can be edited or deleted by the user, or deleted by the room owner.

const MessageListItem = (props) => {
  const { id, content, time, user } = props;

  const messageClass = classNames();

  return (
    <div>
      <li className={messageClass}>
        <img src={user.avatar} alt={(user.name, " avatar")} />
        <h2>{user.name}</h2>
        <span>{time}</span>
      </li>
      <li>{content}</li>
    </div>
  );
};

export default MessageListItem;