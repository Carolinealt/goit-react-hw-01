import css from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  let id = 0;
  let markUp = friends.map((friend) => {
    return (
      <li key={(id += 1)} className={clsx(css.friendsItem)}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  {
    markUp.join(" ");
  }
  return <ul className={clsx(css.friendsList)}>{markUp}</ul>;
};

export default FriendList;
