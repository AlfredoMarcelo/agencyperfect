import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Home} from "./views/home";
import {Login} from "./views/login";
import {Profile} from "./views/profile";
import {Portfolio} from "./views/portfolio";
import {Project} from "./views/project";
import {Register} from "./views/register";
import {NotFound} from "./views/notfound";
import injectContext from "./store/appContext";
import NavbarAdmin from "./components/NavbarAdmin";
import HomeAdmin from "./views/HomeAdmin";
import BoardPortfolio from "./views/BoardPortfolio";
import BoardUser from "./views/BoardUser";

const Layout = () => {
  return (
    <BrowserRouter>
      {1>2?<Navbar/>:<NavbarAdmin />}
      <Switch>
          {1> 2?<Route exact path="/" component={Home}/>:
          <Route exact path="/" component={HomeAdmin}/>} 
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/boardPortfolio" component={BoardPortfolio}/>
          <Route exact path="/boardUser" component={BoardUser}/>
          
          <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
export default injectContext(Layout);
