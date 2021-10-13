import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Merch from './Pages/Merch'
import Armor from './Pages/Armor'
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <SocialMedia />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/merch" component={Merch}/>
            <Route exact path="/armor" component={Armor}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
