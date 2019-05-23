import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { editSet, fetchSet } from '../../actions';
import SetForm from './SetForm';

class SetEdit extends Component {
  componentDidMount(){
    this.props.fetchSet(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editSet(this.props.match.params.id, formValues)
  }

  render() {
    if(!this.props.set) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a set</h3>
        <SetForm
          initialValues={_.pick(this.props.set, 'exercise', 'weight', 'reps')}
          onSubmit={this.onSubmit}/>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { set: state.sets[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {
  fetchSet,
  editSet
}) (SetEdit);
