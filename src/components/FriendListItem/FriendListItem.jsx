import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.container)}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={clsx(css.friendsImg)}
      />
      <p className={clsx(css.friendsName)}>{name}</p>
      <p
        className={clsx(css.friendsStatus, isOnline ? css.online : css.offline)}
      >{`${isOnline}`}</p>
    </div>
  );
};

export default FriendListItem;
