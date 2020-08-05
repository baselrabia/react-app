import React, { Component } from 'react'; 

class Counter extends Component {
  state = {
    count: this.props.value,
    // image: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"],
  };


  render() {

    //  console.log("props" , this.props);

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
          onClick={ () => this.handelIncrement({id : 1}) }
          className="btn btn-secondary"
        >
          Increment{" "}
        </button>
        <br></br>
        
      </React.Fragment>
    );
  }

  handelIncrement = (product) => {
    console.log(product);
    this.setState({count : this.state.count + 1})
  }

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
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
 
export default Counter;