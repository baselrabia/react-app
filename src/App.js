import React, { Component } from 'react'; 
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component{
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props){
    super(props);
    console.log("App - constructor");
    //this.state = this.props.something
    //wrong to use --> this.setState  cus it only use after render the state 
  };

  componentDidMount(){
    // called after component render into the dom 
    //perfect place to make ajax calls to get data from the server

   console.log("App - Mount");

  }


  handleIncrement = (counter) => {
   const counters = this.state.counters;
   const index = counters.indexOf(counter);
   counters[index].value++;
   this.setState({ counters });
 };

 handleReset = () => {
   const counters = this.state.counters.map((c) => {
     c.value = 0;
     return c;
   });
   this.setState({ counters });
 };

 handleDelete = (counterId) => {
   const counters = this.state.counters.filter((c) => c.id !== counterId);
   this.setState({ counters });
 };

 render(){
       console.log("App - main render");

   return (
     <React.Fragment>
       <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

       <main className="container">
         <Counters
           counters={this.state.counters}
           onDelete={this.handleDelete}
           onIncrement={this.handleIncrement}
           onReset={this.handleReset}
         />
       </main>
     </React.Fragment>
   );
  }
}

export default App;
