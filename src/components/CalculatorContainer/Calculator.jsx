import React from "react";
import "./Calculator.modules.css";
import { saveState } from "../../helpers/localStorage";


export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      minimum: 0,
      maximum: 10,
      step: 1,
    };
  }

  handleInc = () => {
    this.setState((prevState) => {
      saveState("counterInc", prevState.count + this.state.step);
      return {
        count: prevState.count + this.state.step,
      };
    });
  };
   

  handleDec = () => {
    this.setState((prevState) => {
      saveState("counterDec", prevState.count - this.state.step);
      return {
        count: prevState.count - this.state.step,
      };
    });
  };
   

  handleReset = () => {
    this.setState(()=>{
      saveState("counterReset", 0);
      return {count:0}
    });
    
  };

  handleStep= ({ target: { value } }) => {
    this.setState({
      step: Number(value),
    });
  };

  handleMinCount =(event) => {
    const minimum = Number(event.target.value)
    this.setState({ minimum })

};

handleMaxCount =(event)=>{
  const maximum=Number(event.target.value)
  this.setState({maximum})
}
  
  render(){
    return (
    <div className='container'>
      <button disabled={this.state.count + this.state.step >this.state.maximum} onClick={this.handleInc} className='counter'>+</button>
      <button  disabled={this.state.count-this.state.step <this.state.minimum} onClick={this.handleDec} className='counter'>-</button>
      <button onClick={this.handleReset} className='reset'>Reset</button>
      <h2>{this.state.count}</h2>
        <label>
          Min<input onChange={this.handleMinCount}  className='minimum' />
        </label>
        <label>
         Max<input onChange={this.handleMaxCount} className='maximum' />
        </label>
        <label>
          Step<input onChange={this.handleStep} className='step' />
        </label>
    </div>
    )
  }
}

