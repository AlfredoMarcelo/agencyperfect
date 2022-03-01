import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Home} from "./views/home";
import {Login} from "./views/login";
import {Profile} from "./views/profile";
import {Portfolio} from "./views/portfolio";
import {Project} from "./components/Project";
import {Register} from "./views/register";
import NotFound from "./views/NotFound";
import injectContext, { Context } from "./store/appContext";
import NavbarAdmin from "./components/NavbarAdmin";
import HomeAdmin from "./components/HomeAdmin";
import BoardPortfolio from "./views/BoardPortfolio";
import BoardUser from "./views/BoardUser";
import { useContext } from "react";


const Layout = () => {


  const {store}=useContext(Context)



  return (
    <BrowserRouter>
      {store.isAuth && store.currentUser.user.email == "admin@gmail.com" ?<NavbarAdmin/>:<Navbar/>}
      <Switch>
          <Route exact path="/admin" component={HomeAdmin}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/boardPortfolio" component={BoardPortfolio}/>
          <Route exact path="/boardUser" component={BoardUser}/>
          <Route exact path="*" component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
export default injectContext(Layout);
