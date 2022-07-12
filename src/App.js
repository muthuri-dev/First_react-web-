import Navbar from "./Navbar";
import Home from "./Home";
import './index.css';
import {Route,BrowserRouter as Router,Switch}from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./Blogdetails";
import NoteFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/create">
                <Create/>
            </Route>
            <Route path="/blogs/:id">
                <BlogDetails/>
            </Route>
            <Route path="*">
              <NoteFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
