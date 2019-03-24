import React, { Component } from "react";
import TacticsList from '../TacticsList.js';
 
class Home extends Component {
  render() {
    return (
      <div className="homePage">
		<TacticsList />
      </div>
    );
  }
}
 
export default Home;