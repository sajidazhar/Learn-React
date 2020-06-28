import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler(){
        console.log('click the button')
    }
    render() {
        return (
            <div>
              <button onClick={this.ClickHandler}>Click ME!</button>  
            </div>
        )
    }
}

export default ClassClick
