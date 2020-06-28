import React, { Component } from 'react'
import LifeCycleB from './LIfeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'sajid'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDrivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA component mount')
    }
    
    shouldComponentUpdate(){
        console.log('LifeCycleA should update component')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshot before Upadte')
    }
    componentDidUpdate(){
        console.log('LifeCycleA component did update')
        return null
    }
    changeState= () => {
        this.setState({
            name : 'sksajidazhar'
        })
    }
        render() {
        console.log('LifeCycleA render')
        return (
            <div>
            <div>LifeCycleA </div>
            <button onClick={this.changeState}>changState</button>
        <LifeCycleB />
        </div>
        )
    }
}

export default LifeCycleA
