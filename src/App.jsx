import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import data from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
export default function App() {
  return (
    <div>
      <Profile
        name={data.username}
        tag={data.tag}
        location={data.location}
        image={data.avatar}
        stats={data.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
