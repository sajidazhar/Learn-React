import React, { Component } from 'react'
class welcome extends Component{
   render(){
   return <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
   }
}
export default welcome