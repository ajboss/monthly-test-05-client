import React , {Component} from 'react';
import { connect } from 'react-redux';
// import { fetchOrders, generateBill } from '../actions/itemActions';

import {bindActionCreators} from 'redux';
import { AddItemAction } from '../actions/itemActions';
import Menu from '../components/Menu';
import OrdersList from '../components/OrdersList';
import UserInput from '../components/UserInput';

class Order extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     usn: '',
        //     mobile : -1,
        //     paymentMode: 'CASH'
        // }
    }
    componentDidMount() {
        // this.props.fetchOrders();
    }

    // onClick = (item) => {
    //     console.log(item.TableName);
    //     //UPDATE STORE!
    // }

    addItem= (data)=>{
        this.props.AddItemAction(data);
    }

    handleMenuItemClick = (data) => {
        // console.log(data.ItemName);
        this.addItem(data)
    }
    render() {
        return (
            <div className="App" style={{height: '98vh'}}>
                <div className="row p-0 m-0">
                <div className="col-6 p-0 m-0">
                    <UserInput />
                    {/* <UserInput getUsn={(val)=> this.setState({usn: val})}
                        getMobile = {(val) => this.setState({mobile:val})}
                        getPaymentMode = {(val) => this.setState({paymentMode:val})} /> */}
                    <Menu addItem = {this.handleMenuItemClick}/>
                </div>
                <div className="col-6 p-0 m-0">
                    {/* <OrdersList list = {this.props.items} usn={this.state.usn} mobile={this.state.mobile} paymentMode={this.state.paymentMode}/> */}
                    <OrdersList list= {this.props.items} />
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({AddItemAction},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);