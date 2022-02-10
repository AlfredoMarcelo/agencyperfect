import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Home} from "./views/home";
import {Login} from "./views/login";
import {Profile} from "./views/profile";
import {Portfolio} from "./views/portfolio";
import {Contact} from "./views/contact";
import {NotFound} from "./views/notfound";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
export default Layout;
