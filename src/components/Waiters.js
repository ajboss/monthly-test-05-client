import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWaiters, selectWaiter } from '../actions/waiterActions';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import wtr from '../img/waiter.png';

class Waiters extends Component {
    componentDidMount() {
        this.props.fetchWaiters();
    }

    onClick = (item) => {
        // console.log(item.WaiterName);
        this.props.selectWaiter(item);
        //UPDATE STORE!
        
    }
    
    createCards = item => {
        let cardStyle = "c_card";
        if(item.status) cardStyle = "c_card r_tables card_selected";
        else cardStyle = "c_card r_tables card_normal";
        return <li id="listLi" key={item.id} >
            <div className={cardStyle} style={{ backgroundImage:`url(${wtr})`, backgroundRepeat:'no-repeat', backgroundClip:'content-box', position:'relative' }} onClick = {() => this.onClick(item)}>
            <div className="name_ribbon" style={{height:'100%', display: 'flex'}}>
                <div style={{background: 'rgba(55, 71, 79, 0.55)', alignSelf: 'flex-end', width:'100%'}}>
                    <h6 className="text-center">
                       {item.WaiterName}
                    </h6>
                    <h6 className="text-center">
                       Age : {item.WaiterAge}
                    </h6>
                    <h6 className="text-center">
                       {item.WaiterMobile}
                    </h6>
                </div>
            </div>
            
            <div className="table_strength" style={{ position:'absolute', zIndex:'2', top:'0', left:'0'}}>
                <div className="card_selected rounded" style={{display:'flex', alignItems: 'center', justifyContent:'center',backgroundColor: 'rgba(102, 187, 106, 1)', height:'30px', width:'50px'}}>
                 <h6 className="text-center" style={{fontSize: '12px'}} ><i className="fa fa-certificate" style={{fontSize: '12px'}} /> {item.WaiterExperience}</h6>
                </div>
            </div> 
            <div className="table_strength" style={{position:'absolute', zIndex:'1', top:'0', right:'0'}}>
                <div className=" card_selected rounded" style={{display:'flex', alignItems: 'center', justifyContent:'center', backgroundColor: '#42A5F5', height:'30px', width:'40px'}}>
                    <h6 className="text-center" style={{fontSize: '12px'}} > <i className="fa fa-star d-inline" style={{fontSize: '12px'}} /> {item.WaiterRatings}</h6>
                </div>
            </div>
        {/* let cardStyle = "c_card";
        if(item.status) cardStyle = "c_card card_green"
        return <li id="listLi" key={item.id} >
            <div className={cardStyle} onClick = {() => this.onClick(item)}> */}
            <div className="row c_card_content">
                <h6 className="todoText">
                    Waiter Name : {item.WaiterName}
                </h6>
                <h6 className="todoText">
                    Waiter Age : {item.WaiterAge}
                </h6>
                <h6 className="todoText">
                    Waiter Mobile : {item.WaiterMobile}
                </h6>
                <h6 className="todoText">
                    Waiter Ratings : {item.WaiterRatings}
                </h6>
                <h6 className="todoText">
                    Waiter Experience : {item.WaiterExperience}
                </h6>
            </div>
            </div>
        </li>
    }

    render() {
        const listItems = this.props.waiters.map(this.createCards);
        return (
            <div>
                {/* {waiters} */}
                <h1 className="display-3 text-white ml-5">Select Waiter</h1>
                <ul className="theList" style={{scrollbarWidth: 'none', overflowY: 'scroll', height: '75vh', msOverflowStyle: 'none'}}>{listItems}</ul>
                <Link to="/order">
                    <div style={{position:'relative'}}>
                        <button className="btn btn-secondary mr-5" style={{position:'absolute', top:'0', right:'0'}}>Next</button>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    waiters: state.waiters.waiters
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWaiters, selectWaiter},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Waiters);