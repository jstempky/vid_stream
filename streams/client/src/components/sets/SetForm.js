import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SetForm extends React.Component {
  renderError({ error, touched }) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="exercise"
          component={this.renderInput}
          label="Enter Exercise"
        />
        <Field
          name="weight"
          component={this.renderInput}
          label="Enter weight"
        />
        <Field
          name="reps"
          component={this.renderInput}
          label="Enter reps"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.exercise) {
    errors.title="You must enter an exercise.";
  }
  if (!formValues.weight) {
    errors.title="You must enter an exercise.";
  }
  if (!formValues.reps) {
    errors.title="You must enter an exercise.";
  }

  return errors;
};

export default reduxForm({
  form: 'setForm',
  validate
})(SetForm);
