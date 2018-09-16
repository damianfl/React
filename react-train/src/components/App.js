import React, { Component } from "react";
import "./App.scss";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userText: "",
      list: []
    };
  }

  handleChange = evt => {
    this.setState({
      userText: evt.target.value
    });
  };

  addItem = evt => {
    evt.preventDefault();
    let itemArr = this.state.list;

    this.state.userText.length === 0 ? null : itemArr.push(this.state.userText);

    this.setState({
      list: itemArr
    });
    this.setState({
      userText: ""
    });
  };

  deleteItem = index => {
    const items = Object.assign([], this.state.list);
    items.splice(index, 1);
    console.log(items);
    this.setState({
      list: items
    });
    console.log(this.state.list.length);
  };
  handleKeyPress = evt => {
    if (evt.key === "Enter" && this.state.message !== "") {
      this.addItem(evt);
    }
  };

  render() {
    return (
      <div className="app">
        <div className="appWrapper container">
          <div className="taskCatcher">
            <div className="input">
              <input
                className="taskName"
                type="text"
                value={this.state.userText}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="Enter your activities ..."
              />
              <button
                className="taskSubmit"
                type="submit"
                onClick={this.addItem}
              >
                <i class="fa fa-plus" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="itemList">
            {this.state.list.length === 0 ? (
              <p className="emptyTxt">
                Your activities list seems to be empty ...
              </p>
            ) : null}

            {this.state.list.map((item, index) => {
              return (
                <li className="listItem" key={index}>
                  <p>{item}</p>
                  <button
                    className="listItem--button delete--button"
                    onClick={this.deleteItem.bind(this, index)}
                  >
                    <i class="fa fa-trash" aria-hidden="true" />
                  </button>
                  <button className="listItem--button complete--button">
                    <i class="fa fa-check" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
