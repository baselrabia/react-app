import React, { Component } from 'react'; 

class Counter extends Component {
  state = {
    id: this.props.id,
    value: this.props.value,
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
          onClick={() => this.handelIncrement()}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete()}
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

  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

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
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}
 
export default Counter;