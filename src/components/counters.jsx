import React, { Component } from 'react'; 
import Counter from "./counter";

class Counters extends Component {
  
  render() {

        console.log("App - counters");

    const {counters,onDelete,onIncrement,onReset} = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-lg btn-default m-4"
        >
          Reset
        </button>
        <br></br>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
 
}


export default Counters;
