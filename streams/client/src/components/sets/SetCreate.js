import React from 'react';
import {connect} from 'react-redux';
import { createSet } from '../../actions';
import SetForm from './SetForm';

class SetCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createSet(formValues);
  }

  render(){
    return (
      <div>
        <h3>Create a Set</h3>
        <SetForm onSubmit={this.onSubmit}/>
      </div>

    );
  }
}

export default connect(null, { createSet })(SetCreate);
