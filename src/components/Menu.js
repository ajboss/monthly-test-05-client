import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/menuActions';

class Menu extends Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    addItem = (menu) => {
        this.props.addItem(menu);
    }
    render() {
        // const menus = this.props.menus.map( menu => (
        //     <div key = {menu.id} onClick={()=> this.addItem(menu)}>
        //         <h3 className="d-inline-block">{menu.ItemName}</h3>
        //         <h3 className="d-inline-block"> &nbsp;&nbsp;{menu.CuisineName}</h3>
        //         <h3 className="d-inline-block"> &nbsp;&nbsp;{menu.VegEggNonVeg}</h3>
        //         <h3 className="d-inline-block"> &nbsp;&nbsp;{menu.ItemPrice}</h3>
        //     </div>
        // ));

        let table = 
            <div className="row">
                <div className="col">
                <div className="rounded" style={{background:'#E9ECEF', overflowY: 'scroll', height: '40vh', msOverflowStyle: 'none', scrollbarWidth: 'none',}}>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Cuisine Name</th>
                                <th>Veg/Egg/Non-Veg</th>
                                <th>Item Price</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.menus.map( (item, index) => {
                                let tr;
                                return (
                                    <tr key={index} className={tr}>
                                        <td>{item.ItemName}</td>
                                        <td>{item.CuisineName}</td>
                                        <td>{item.VegEggNonVeg}</td>
                                        <td>{item.ItemPrice}</td>
                                        <td><button className="btn btn-primary" onClick={()=> this.addItem(item)}>Add</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

        return (
            <div>
                <h2 className="text-white">Menu</h2>
                <br />
                {table}
            </div>
        );
        
    }
}

const mapStateToProps = state => ({
    menus: state.menus.menus
});

export default connect(mapStateToProps,{ fetchMenu })(Menu);