import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { addCart } from "./redux/reducer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartInput: "",
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({ cartInput: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.addCart(this.state.cartInput);
            //# addCart(this.state.cartInput) is not connected to redux
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // return {
  //   user: reduxState.userReducer.user,
  // };
  return reduxState.userReducer;
}

//#connect(function, object) - mapStateToProps, mapDispatchToProps(action builders)
//#connect(data from redux to props, functions that send data to redux from React)
export default connect(mapStateToProps, { addCart })(App);
