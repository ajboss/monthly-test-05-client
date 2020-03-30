import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addUsn, addUserMobile, addPaymentMode } from '../actions/inputActions';
class UserInput extends Component {
    render() {
        return (
            <div className="jumbotron m-2 pt-4 pb-4" style={{borderStyle: 'solid'}}>
                <div className="m-2">
                    <h1>User Details</h1>
                </div>
                <hr/>
                <div className="m-2">
                    <div className="d-block m-1">
                        <div className="form-group float-center p-1 d-inline-block">
                            <input type="text" onChange={(event) => this.props.addUsn(event.target.value)} pattern="^[a-zA-Z0-9]+.{2,}$" className="form-control m-1" id="usn" placeholder="Enter Username" name="usn" required />
                        </div>
                    </div>
                    <div className="d-block m-1">
                        <div className="form-group float-center p-1 d-inline-block">
                            <input type="tel" onChange={(event) => this.props.addUserMobile(event.target.value)} pattern="^\d{10}$" className="form-control m-1" id="mobile" placeholder="Mobile Number" name="mobile" required />
                        </div>
                    </div>
                    <div>
                        <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio1">
                            <input onClick={(event) => this.props.addPaymentMode(event.target.value)} type="radio" className="form-check-input" id="radio1" name="optradio" defaultValue="CASH" defaultChecked/>Cash
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio2">
                            <input onClick={(event) => this.props.addPaymentMode(event.target.value)} type="radio" className="form-check-input" id="radio2" name="optradio" defaultValue="CARD" />Card
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio3">
                            <input onClick={(event) => this.props.addPaymentMode(event.target.value)} type="radio" className="form-check-input" id="radio3" name="optradio" defaultValue="ONLINE" />Online
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addUsn, addUserMobile, addPaymentMode},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInput);