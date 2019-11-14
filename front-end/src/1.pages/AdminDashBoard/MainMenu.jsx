import React, { Component } from 'react';
import ManageProduct from './ManageProduct';


class MainMenu extends Component {

    state = {
        tabMenu : 1
    }

    render() {
        return (
            <div>
                <div className="admin-tab text-center d-flex mt-4">
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 1})} className='admin-tab-menu'>Manage Product</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 2})} className='admin-tab-menu' >Manage Berita</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 3})} className='admin-tab-menu' >Subscription</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 4})} className='admin-tab-menu' >History Transaction</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 5})} className='admin-tab-menu' >Log Activity User</div>
                </div>
                <div className="auth-content pt-4">
                    {this.state.tabMenu === 1 ? <ManageProduct/> : null}

                </div>
            </div>
        );
    }
}

export default MainMenu;