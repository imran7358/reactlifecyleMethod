import React, { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Mohammad'
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()")
    this.removeStat()

  }
  componentDidMount() {
    console.log("componentDidMount()")

  }
  
  changeState(){
    this.setState({content:'Kashif'})
  }
  

  componentWillReceiveProps(nexProps, nexState){

    console.log("componentWillReceiveProps()")

    return true;

  }

  componentWillUpdate(){

    console.log("componentWillUpdate()")

  }

  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }

  removeStat(){
    this.setState({content: ''})
  }




compo
  render() {

    return (

      <div className='container'>
        <h2 className='text-center'>React LifeCycle Methods</h2>
        <p className='text-center'>Welocme to ReactWorld {this.state.content}</p>
        <div className='text-center'>
        <button onClick={this.changeState.bind(this)} style={{marginRight: '10px', background: '#f27935', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold'}}>Change State</button>
        <button onClick={this.removeStat.bind(this)} style={{marginRight: '10px', background: '#f27935', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold'}}>Remove State</button>
        </div>
      </div>
    )

  }
}

export default App;