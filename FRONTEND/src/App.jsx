import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Register-Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Results from "./components/Results/Results";
import Register from "./components/Register-Login/Register";
function App() {

  return (
    <BrowserRouter>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
