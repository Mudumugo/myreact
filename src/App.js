import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const title = "welcome to the new blog";
  


  return (
    <Router>


      <div className="App">
        <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Create">
            <Create/>
          </Route>
        </Switch>
        
      </div>
      </div>
      </Router>  
  );
}

export default App;
