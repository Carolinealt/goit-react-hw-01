import {Product} from './Product';
import { Product } from "./Product";
import { BookList } from "./BookList";
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];
>>>>>>> Stashed changes

export default function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <h1>Products</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
>>>>>>> Stashed changes
    </div>
  );
}
