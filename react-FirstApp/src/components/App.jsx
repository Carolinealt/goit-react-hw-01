
import { BookList } from "./BookList";
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <div>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </div>
  );
}
