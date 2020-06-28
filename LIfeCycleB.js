import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'sajid'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDrivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB component mount')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDrivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB should update component')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshot before Upadte')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB component did update')
    }
    render() {
        console.log('LifeCycleB rendor')
        return <div>LifeCycleB </div>
    }
}

export default LifeCycleB
