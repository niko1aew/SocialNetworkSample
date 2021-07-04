import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../Redux/Reducers/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

// С помощью HOC функций создаем слои вокруг компоненты
export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfile: getProfileThunkCreator })
)(ProfileContainer)
