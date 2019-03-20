import React, { Component } from "react";
import TacticsList from './TacticsList.js';
 
class Home extends Component {
  render() {
    return (
      <div className="homePage">
		<h1>home</h1>
		<TacticsList />
      </div>
    );
  }
}
 
export default Home;