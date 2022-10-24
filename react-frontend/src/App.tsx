// Imports
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './components/Home'
const Home = lazy(() => import('./components/Home'));
import { redirect } from "react-router-dom";

const loader = async () => {
  const user = await getUser();
  if (!user) {
    return redirect("/login");
  }
};


// The App

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

// Export
export default App;

// Trash

/*



import {
  BrowserRouter,
  Navigate,
  Route
} from "react-router-dom";





function App() {

  return (

    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>

);
}


/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit App.tsx in src folder, save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Welcome to moki's game center
  </a>
</header>
</div>




*/