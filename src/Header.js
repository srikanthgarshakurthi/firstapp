import React, { Component } from "react";
import "./Header.css";
// class Header extends Component {
//   constructor(props) {
//     super(props);
//     //  console.log(">>>>inside constructor");
//     this.state = {
//       title: "React App",
//       keyword: "user Input here",
//     };
//   }

//   handleChange = (event) => {
//     // console.log(event.target.value);
//     this.setState({
//       keyword: event.target.value ? event.target.value : "user Input here"})
//       //  passing to parent
//       this.props.userInput(event.target.value)
//     };
//   };
class Header extends Component {
  constructor(props) {
    super(props);
    // console.log(">>>>inside constructor ")
    this.state = {
      title: "React App",
      keyword: "User Input Here",
    };
  }

  // filteredData = (keyword) => {
  //   let output = this.state.productData.filter((data) => {
  //     return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
  //   });

  //   this.setState({ filteredData: output });
  // };

  handleChange = (event) => {
    //console.log(event.target.value)
    this.setState({
      keyword: event.target.value ? event.target.value : "User Input Here",
    });
    // passing to parent
    this.props.userInput(event.target.value);
  };

  render() {
    console.log(">>>>inside render");
    // console.log(">>>>inside render")
    return (
      <>
        <header>
          <div className="logo">{this.state.title}</div>
          <input onChange={this.handleChange} />
          <div style={{ color: "white", fontSize: "20px" }}>
            {this.state.keyword}
          </div>
        </header>
        <hr />
      </>
    );
  }
}

export default Header;
