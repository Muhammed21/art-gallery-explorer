import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
