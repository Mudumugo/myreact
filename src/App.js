import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "welcome to the new blog";
  const likes =50;


  return (
    <div className="App">
      <Navbar/>
     <div className="content">
       
       <Home/>
       <p>Liked{likes}times</p>
     </div>
    </div>
  );
}

export default App;
