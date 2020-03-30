import React, { Component } from 'react';
import store from '../store';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            TotalPrice : 0,
            UserName: "",
            UserMobile: -1,
            WaiterId: -1,
            TableId: -1,
            PaymentMode: 'CASH'
        }

        store.subscribe(() => {
            let items = store.getState().items.items;
            let tp = 0;
            items.forEach((item)=>{
                tp = tp + parseFloat(item.ItemPrice);                
            })
            this.setState({
              items: items,
              TotalPrice: tp,
              WaiterId: store.getState().waiters.waiterId,
              TableId: store.getState().tables.tableId,
              UserName: store.getState().inputs.usn,
              UserMobile: store.getState().inputs.userMobile,
              PaymentMode: store.getState().inputs.paymentMode
            });
        });        
    }

    // componentWillReceiveProps(nextProps) {
    //    if(nextProps.usn || nextProps.mobile) {
    //     this.setState({
    //         UserName: nextProps.usn,
    //         UserMobile: nextProps.mobile,
    //         PaymentMode: nextProps.paymentMode
    //     });
    //    }
    // }

    addItem = (item) => {
        this.props.addItem(item);
    }
    
    generateBill = async () => {
        let items = [];
        await this.state.items.map((item) => {
            items.push({
                "ItemName" : item.ItemName,
                "CuisineName" : item.CuisineName,
                "VegEggNonVeg" : item.VegEggNonVeg,
                "ItemPrice" : item.ItemPrice
            });
            return null;
        });
        let orderObj = {};
        orderObj["UserName"] = this.state.UserName;
        orderObj["UserMobile"] = this.state.UserMobile;
        orderObj["TotalPrice"] = this.state.TotalPrice;
        orderObj["TableId"] = this.state.TableId;
        orderObj["WaiterId"] = this.state.WaiterId;
        orderObj["ItemsOrdered"] = await JSON.stringify(items);
        orderObj["PaymentMode"] = this.state.PaymentMode;
        // console.log(orderObj);
        const res = fetch("http://localhost:5000/order", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(orderObj)
        });
        res.then(() => alert("Success!")).catch("Error");
    }

    handleBill= () => {
        if(this.state.items.length < 1) alert("Please Order Something First!");
        else if(this.state.TableId === -1) alert("Please Select A Table!");
        else if(this.state.WaiterId === -1) alert("Please Select A Waiter!");
        else if (!(/^[0-9]{10,}/.test(this.state.UserMobile))) alert("Enter A Valid Mobile Number!");
        else if (!(/^[a-zA-Z0-9]{3,}/.test(this.state.UserName))) alert("Invalid Username! Username must be atleast 3 characters long! Can only contain alpha-numeric characters!");
        else this.generateBill();
    }
    render() {
        let table = 
            <div className="row">
                <div className="col">
                <div className="rounded" style={{background:'#E9ECEF', overflowY: 'scroll', height: '60vh', msOverflowStyle: 'none',scrollbarWidth: 'none'}}>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Cuisine Name</th>
                                <th>Veg/Egg/Non-Veg</th>
                                <th>Item Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map( (item, index) => {
                                let tr;
                                return (
                                    <tr key={index} className={tr}>
                                        <td>{item.ItemName}</td>
                                        <td>{item.CuisineName}</td>
                                        <td>{item.VegEggNonVeg}</td>
                                        <td>{item.ItemPrice}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

        return (
            <div className="container-fluid">
                <h2 className="text-white">Orders</h2>
                <br />
                {table}
                <br /> 
                <h1 className="text-white">Total Price : {this.state.TotalPrice}</h1>
                <button className="btn btn-primary" onClick={()=> this.handleBill()}>Generate Bill</button>
            </div>
        );
    }
}

export default OrderList;