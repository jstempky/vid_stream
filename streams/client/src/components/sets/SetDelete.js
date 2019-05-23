import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchSet, deleteSet } from '../../actions';

// Empty tags '<>, </>' are <React.Fragment> shorthand
class SetDelete extends Component {
  componentDidMount(){
    this.props.fetchSet(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
    <React.Fragment>
      <button
        onClick={() => this.props.deleteSet(id)}
        className="ui button negative"
      >
          Delete
      </button>
      <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
  }

  renderContent(){
    if(!this.props.set){
      return 'Are you sure you want to delete this set?'
    }

    return `Are you sure you want to delete set: ${this.props.set.exercise}`
  }


  render() {
    return (
      <Modal
        title="Delete Set"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { set: state.sets[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {
  fetchSet,
  deleteSet } )(SetDelete);
