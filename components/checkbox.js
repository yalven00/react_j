import React from 'react';
import { connect } from 'react-redux';
import store from '../redux/store.js';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch({ type: 'SET', id: this.props.id, value: true });
  }
  render() {
    return (
      <button
        className={this.props.classes}
        onClick={() => store.dispatch({ type: 'TOGGLE', id: this.props.id })}
      >
        <svg viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" />
          <polygon
            points="10,30 50,50 80,0 50,80 10,30"
            className={this.props.redux[this.props.id] ? '' : 'hidden'}
          />
        </svg>
        {this.props.title}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { redux: state };
}

export default connect(mapStateToProps)(Checkbox);