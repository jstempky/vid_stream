import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSets } from '../../actions';

class SetList extends React.Component {
  componentDidMount(){
    this.props.fetchSets();
  }

  renderAdmin(set) {
    if (set.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/sets/edit/${set.id}`} className="ui button primary">Edit</Link>
          <Link to={`/sets/delete/${set.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.sets.map(set => {
      return (
        <div className="item" key={set.id}>
          {this.renderAdmin(set)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link
              to={`/sets/${set.id}`}
              className="header"
            >
              4/20/19
            </Link>
            <div className="description">{set.exercise}</div>
            <div className="description">{set.reps}</div>
            <div className="description">{set.weight}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/sets/new" className="ui button primary">
            CreateSet
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Sets</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sets: Object.values(state.sets),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {fetchSets}) (SetList);
