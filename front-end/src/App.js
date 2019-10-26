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
import BrewerDetails from './1.pages/Details/BrewerDetails';
import EquipmentDetails from './1.pages/Details/EquipmentDetails';
import ToolDetails from './1.pages/Details/ToolDetails';
import KopiDetails from './1.pages/Details/KopiDetails';
import GiftDetails from './1.pages/Details/GiftDetails';
import Cart from './1.pages/Cart/Cart';
import Aeropress from './1.pages/Seduh/Aeropress';
import EvaSolo from './1.pages/Seduh/EvaSolo';
import Mokapot from './1.pages/Seduh/Mokapot';
import Chemex from './1.pages/Seduh/Chemex';
import Coldbrew from './1.pages/Seduh/ColdBrew';
import Frenchpress from './1.pages/Seduh/FrenchPress';
import NelDrip from './1.pages/Seduh/NelDrip';
import PourOver from './1.pages/Seduh/PourOver';
import Syphon from './1.pages/Seduh/Syphon';
import TurkishCoffee from './1.pages/Seduh/TurkishCofffee';
import Walkure from './1.pages/Seduh/Walkure';
import SeduhBox from './1.pages/Seduh/SeduhBox';
import percobaan from './1.pages/Cart/percobaan1withmodal';
import EmailWaiting from './1.pages/Auth/EmailWaiting';
import EmailVerified from './1.pages/Auth/EmailVerified';
import SidePanel from './1.pages/AdminDashBoard/SideNav';




class App extends Component {

  // state = {
  //   loading : true
  // }

  componentDidMount(){
         this.props.checkKeepLogin()
       
  }

  render() {
    
    return (
      <div>
        <NavbarComp/>

        <Switch>

        <Route path='/' component={Home} exact/>
        <Route path='/sidenav' component={SidePanel} exact/>
        <Route path='/aeropress' component={Aeropress} exact/>
        <Route path='/evasolo' component={EvaSolo} exact/>
        <Route path='/mokapot' component={Mokapot} exact/>
        <Route path='/chemex' component={Chemex} exact/>
        <Route path='/coldbrew' component={Coldbrew} exact/>
        <Route path='/frenchpress' component={Frenchpress} exact/>
        <Route path='/neldrip' component={NelDrip} exact/>
        <Route path='/pourover' component={PourOver} exact/>
        <Route path='/syphon' component={Syphon} exact/>
        <Route path='/turkishcoffee' component={TurkishCoffee} exact/>
        <Route path='/walkure' component={Walkure} exact/>
        <Route path='/seduhbox' component={SeduhBox} exact/>
        <Route path='/percobaan' component={percobaan} exact/>
        <Route path='/user/cart' component={Cart} exact/>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path='/auth' component={Auth} />
        <Route path='/waitingemail' component={EmailWaiting} />
        <Route path='/emailverified' component={EmailVerified} />
        <Route path='/brewer-details/:id' component={BrewerDetails}/>
        <Route path='/equipment-details/:id' component={EquipmentDetails}/>
        <Route path='/tool-details/:id' component={ToolDetails}/>
        <Route path='/kopi-details/:id' component={KopiDetails}/>
        <Route path='/gift-details/:id' component={GiftDetails}/>
        <Route path='/paketusaha' component={PaketUsaha} exact/>
        <Route path='/subscription' component={Subscription} exact/>

        </Switch>

        {/* <FooterPage/> */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { checkKeepLogin })(App);