import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body">
      <div className="title">Earnsome MVP Title</div>

      <Link to="/properties">Properties</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}