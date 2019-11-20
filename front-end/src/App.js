import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { checkKeepLogin } from './4.redux/1.Action';
import NavbarComp from './1.pages/Navbar/Navbar';
import Home from './1.pages/Home/Home';
import FooterPage from './1.pages/Footer/Footer';
import Auth from './1.pages/Auth/Auth';
import PaketUsaha from './1.pages/PaketUsaha/PaketUsaha';
import LoginPage from './1.pages/Auth/Login';
import Register from './1.pages/Auth/Register';
import Subscription from './1.pages/Subscription/Subscription';
import Cart from './1.pages/Cart/Cart';
import EmailWaiting from './1.pages/Auth/EmailWaiting';
import EmailVerified from './1.pages/Auth/EmailVerified';
import MainMenu from './1.pages/AdminDashBoard/MainMenu';
import ArtikelMainMenu from './1.pages/Seduh/ArtikelMainMenu';
import ArtikelDetails from './1.pages/Seduh/ArtikelDetails';
import VideoSubscription from './1.pages/Subscription/VideoSubscription';
import ProductDetails from './1.pages/Details/ProductDetails';
import SubscriptionDetails from './1.pages/Subscription/SubscriptionDetails';
import ProductSearch from './1.pages/ProductSearch/ProductSearch';
import Payment from './1.pages/History/Payment';
import History from './1.pages/History/History';
import CartSubscription from './1.pages/Subscription/CartSubscription';
import MainMenuHistory from './1.pages/History/MainMenuHistory';
import HistorySubs from './1.pages/History/HistorySubs';
import Wishlist from './1.pages/Wishlist/Wishlist';


class App extends Component {

  componentDidMount(){
        this.props.checkKeepLogin()    
  }


  render() {
    
    return (
      <div>
        <NavbarComp/>
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/admindashboard' component={MainMenu} exact/>
        <Route path='/video' component={VideoSubscription} exact/>
        <Route path='/user/cart/:id' component={Cart} exact/>
        <Route path='/artikel' component={ArtikelMainMenu} />
        <Route path='/artikel-details/:id' component={ArtikelDetails} />
        <Route path='/payment/:id' component={Payment} exact/>
        <Route path='/mainmenuhistory' component={MainMenuHistory} exact/>
        <Route path='/wishlist' component={Wishlist} exact/>
        <Route path='/history/:id' component={History} exact/>
        <Route path='/historysubs/:id' component={HistorySubs} exact/>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path='/auth' component={Auth} />
        <Route path='/waitingemail' component={EmailWaiting} />
        <Route path='/emailverified' component={EmailVerified} />
        <Route path='/product-details/:id' component={ProductDetails}/>
        <Route path='/paketusaha' component={PaketUsaha} exact/>
        <Route path='/searchproduct' component={ProductSearch} exact/>
        <Route path='/subscription' component={Subscription} exact/>
        <Route path='/subscription-details/:id' component={SubscriptionDetails} exact/>
        <Route path='/subscription/cart/:id' component={CartSubscription} exact/>
        </Switch>
        <FooterPage/>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { checkKeepLogin })(App);


