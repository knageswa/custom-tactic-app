import React, { Component } from 'react';

import { connect } from 'react-redux';
import Tactic from './Tactic.js';
import './CSSstyles/tactic.css';
class TacticsList extends Component {
    render() {
        return (
            <div>
                <h1>All tactics</h1>
				{console.log(this.props.tactics)}
				{this.props.tactics.map((tactic) => <Tactic key={tactic.id} tactic={tactic} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tactics: state
    }
}
export default connect(mapStateToProps)(TacticsList);
