import css from "./Profile.module.css";
import clsx from "clsx";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.containerAvatar)}>
        <img src={image} alt="User avatar" className={clsx(css.mainImg)} />
        <p className={clsx(css.desk, css.mainName)}>{name}</p>
        <p className={clsx(css.desk)}>@{tag}</p>
        <p className={clsx(css.desk)}>{location}</p>
      </div>
      <ul className={clsx(css.statsList)}>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.statsNaming)}>Followers</span>
          <span className={clsx(css.statsValue)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.statsNaming)}>Views</span>
          <span className={clsx(css.statsValue)}>{stats.views}</span>
        </li>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.statsNaming)}>Likes</span>
          <span className={clsx(css.statsValue)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
