import React, { Component } from 'react'; 

class Counter extends Component {
  // state = {
  //   id: this.props.counter.id,
  //   value: this.props.counter.value,
  //   // image: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3"],
  // };
 
componentDidUpdate(prevProps,prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      // ajax call and get new data from server
    }

}

componentWillUnmount(){
      console.log("Counter Component -- Unmount");

}

  render() {
    //  console.log("props" , this.props);
    console.log("App - counter");

    let classes = this.getBadgeClass();
    return (
      <React.Fragment>
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
          className={classes}
        >
          {this.formatCounter()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  // handelDelete = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  // handelIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandelIncrement = () => {
  //   this.handelIncrement({id : 1});
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>there are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClass() {
    let classes = "badge m-4 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
 
export default Counter;