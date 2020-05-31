import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { usersApi } from '../../api/api';
import { setUserProfile } from '../../Redux/Reducers/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    return usersApi.getProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithRouterProfileContainer
);
