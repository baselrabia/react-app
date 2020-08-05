import React, { Component } from 'react'; 

class Counter extends Component {
  state = {
    count: 0,
    image: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    let classes = this.getBadgeClass();
    return (
      <React.Fragment>
        <img src={this.state.image} alt="" />
        <br></br>
        <span
          style={{
            fontSize: 50,
            fontWeight: "bold",
          }}
          className={classes}
        >
          {this.formatCounter()}
        </span>

        <br></br>
        <button
          onClick = {this.handelIncrement}
          className ="btn btn-sm btn-secondary" 
        >
          Increment{" "}
        </button>
        <br></br>
        {this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handelIncrement = () => {
    this.setState({count : this.state.count + 1})
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

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