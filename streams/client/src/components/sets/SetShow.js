import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSet } from '../../actions';

class SetShow extends Component {
  componentDidMount() {
    this.props.fetchSet(this.props.match.params.id);
  }

  render() {
    if (!this.props.set) {
      return <div>Loading...</div>;
    }

    const { exercise, weight, reps } = this.props.set;

    return (
      <div>
        <h1>{exercise}</h1>
        <h5>{weight}</h5>
        <h5>{reps}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { set: state.sets[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchSet }) (SetShow);
