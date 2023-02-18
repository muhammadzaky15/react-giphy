import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center px-4">
      <h1 className="text-2xl font-bold mt-40">WELCOME TO YOUR GIPHY</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg"
        className="h-20 mx-auto my-10"
        alt="logo giphy"
      />
      <ul>
        <li className="text-blue-500 hover:text-blue-700 font-medium">
          <Link to="iron-man">IRON MAN GIPHY</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 font-medium">
          <Link to="search">SEARCH YOUR GIPHY</Link>
        </li>
      </ul>
    </div>
  );
}
