import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false,
    };
    this.showPara = this.showPara.bind(this);
  }
  showPara() {
    this.setState({
      showParagraph: true,
    });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.showPara}></button>
        {this.state.showParagraph ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
