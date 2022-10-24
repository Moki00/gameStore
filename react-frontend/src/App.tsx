// Imports
import React, { ReactElement, ReactNode } from 'react';
import './App.css';

// The App

// Heading
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingW({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

// default props
const defaultCon = {
  head: <strong>my heading</strong>,
};
type ConProps = { children: ReactNode } & typeof defaultCon;
function Contain({ 
  head,
  children,
 }: ConProps): ReactElement {
  return (
    <div>
      <h1>{head}</h1>
      {children}
    </div>
  );
}

Contain.defaultProps = defaultCon;

// Functional props
function TextWithNumber({
  head,
  children
}: {
  head?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      <h2>{head?.(state)}</h2>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state+1)}>Add</button>
      </div>
    </div>
  )
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index)=>(
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return(
    <div>
      <Heading title="mokis games"></Heading>
      <HeadingW>
        <strong>hi</strong>
      </HeadingW>
      <Contain>foo</Contain>
      <TextWithNumber head={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>add one: {num}</div> }
      </TextWithNumber>
      <List items={["BALLZ", "911", "gun"]} render={(item: string) => <div>{item.toLowerCase()}</div>}></List>
    </div>
  )
  }

// Export
export default App;



// Trash

/*

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