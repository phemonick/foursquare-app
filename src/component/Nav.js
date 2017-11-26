import React, { Component } from 'react';

class Nav extends Component {

    constructor(){
        super()
        this.state = {
            zipCode: ''
        }
    }
    updateZipCode(event){
        console.log('zipcode'+ event.target.value)
        this.setState({
            zipCode: event.target.value
        })
    }
    searchVenues(){
        console.log('search: '+ this.state.zipCode)
    }

    render(){
        return (
            <div>
                <input onChange = {this.updateZipCode.bind(this)} type="text" placeholder="Zip Code" />
                <button onClick={this.searchVenues.bind(this)}> Search </button>
            </div>
        )
    }
}
export default Nav;