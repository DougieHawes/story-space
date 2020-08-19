import React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/public/Landing";

import Signup from "./components/public/Signup";
import Signin from "./components/public/Signin";

import About from "./components/public/About";
import Blog from "./components/public/Blog";
import Events from "./components/public/Events";
import Audio from "./components/public/Audio";
import Images from "./components/public/Images";
import Videos from "./components/public/Videos";
import Literature from "./components/public/Literature";
import Quotes from "./components/public/Quotes";

import AddAudio from "./components/private/AddAudio";
import AddBlog from "./components/private/AddBlog";
import AddEvent from "./components/private/AddEvent";
import AddLiterature from "./components/private/AddLiterature";
import AddVideo from "./components/private/AddVideo";
import AddImage from "./components/private/AddImage";
import AddQuote from "./components/private/AddQuote";

import "./style.css";

const App = () => (
  <div className="app">
    <div className="route-box">
      <Route exact path="/" component={Landing} />

      <Route exact path="/about" component={About} />

      <Route exact path="/sign-in" component={Signin} />
      <Route exact path="/sign-up" component={Signup} />

      <Route exact path="/events" component={Events} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/quotes" component={Quotes} />

      <Route exact path="/audio" component={Audio} />
      <Route exact path="/images" component={Images} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/literature" component={Literature} />

      <Route exact path="/add-audio" component={AddAudio} />
      <Route exact path="/add-literature" component={AddLiterature} />
      <Route exact path="/add-video" component={AddVideo} />
      <Route exact path="/add-images" component={AddImage} />

      <Route exact path="/add-blog" component={AddBlog} />
      <Route exact path="/add-event" component={AddEvent} />
      <Route exact path="/add-quote" component={AddQuote} />
    </div>
    <Navbar />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
