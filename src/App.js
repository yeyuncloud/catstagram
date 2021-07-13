import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import Feed from './Feed';
import Profile from './Profile';



function App() {
  return (
    <Router>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand><Link to="/" style={{ color: "black" }}>Catstagram</Link></Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}






export default App;
