import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTables, selectTable } from '../actions/tableActions';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import tbl from '../img/table.jpg';

class Tables extends Component {
    componentDidMount() {
        this.props.fetchTables();
    }

    onClick = (item) => {
        // console.log(item.TableName);
        //UPDATE STORE!
        this.props.selectTable(item);
    }

    createCards = item => {
        let cardStyle = "c_card";
        if(item.status) cardStyle = "c_card r_tables card_selected";
        else cardStyle = "c_card r_tables card_normal";
        return <li id="listLi" key={item.id} >
            <div className={cardStyle} style={{ backgroundImage:`url(${tbl})`, position:'relative' }} onClick = {() => this.onClick(item)}>
            <div className="name_ribbon" style={{height:'100%', display: 'flex'}}>
                <div style={{background: 'rgba(55, 71, 79, 0.55)', alignSelf: 'flex-end', width:'100%'}}>
                    <h6 className="text-center">
                       {item.TableName}
                    </h6>
                </div>
            </div>
            <div className="table_strength p-2" style={{ position:'absolute', zIndex:'2', top:'0', left:'0'}}>
                <div className="div_circle card_selected" style={{display:'flex', alignItems: 'center', justifyContent:'center',backgroundColor: 'rgba(102, 187, 106, 1)', height:'40px', width:'40px'}}>
                 <h6 className="text-center"> <i className="fa fa-group d-inline" style={{fontSize: '14px'}} /> {item.SeatingStrength}</h6>
                </div>
            </div> 
            <div className="table_strength p-2" style={{position:'absolute', zIndex:'1', top:'0', right:'0'}}>
                <div className="div_circle card_selected" style={{display:'flex', alignItems: 'center', justifyContent:'center', backgroundColor: '#42A5F5', height:'40px', width:'40px'}}>
                    <h6 className="text-center"><i className="fa fa-align-center d-inline" style={{fontSize: '14px'}} /> {item.FloorNumber}</h6>
                </div>
            </div>
            {/* <div className="row c_card_content">
                
                <h6 className="todoText">
                    Seating Strength : 
                </h6>
                <h6 className="todoText">
                    Floor Number : {item.FloorNumber}
                </h6>
            </div> */}
            </div>
        </li>
    }

    render() {
        // const tables = this.props.tables.map( table => (
        //     <div key = {table.id}>
        //         <h3>{table.SeatingStrength}</h3>
        //         <h3>{table.TableName}</h3>
        //         <h3>{table.FloorNumber}</h3>
        //     </div>
        // ));
        const listItems = this.props.tables.map(this.createCards);
        return (
            <div>
                {/* {tables} */}
                <h1 className="display-3 text-white ml-5">Select Table</h1>
                <ul className="theList" style={{scrollbarWidth: 'none', overflowY: 'scroll', height: '75vh', msOverflowStyle: 'none'}}>{listItems}</ul>
                <Link to="/waiter">
                    <div style={{position:'relative'}}>
                        <button className="btn btn-secondary mr-5" style={{position:'absolute', top:'0', right:'0'}}>Next</button>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tables: state.tables.tables
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchTables, selectTable},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tables);