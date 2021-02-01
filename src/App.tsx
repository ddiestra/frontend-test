import React, { Component } from 'react'; 
import EditProfile from './EditProfile';
import Profile from './Profile';

interface AppState {
  edit: boolean,
  profile: {
    firstName: string,
    lastName: string,
    bio: string,
    interests: Array<String>
  }
};


export default class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props)
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
  }


  componentWillMount() {
    this.setState({
      edit: true,
      profile: {
        firstName: '',
        lastName: '',
        bio: '',
        interests: []
      }
    });
  }

  submit(profile:any) {
    this.setState({
      edit: false,
      profile: profile
    })
  }

  edit() {
    this.setState({edit: true});
  }

  render() {

    const edit = this.state.edit;
    const profile = this.state.profile;
    let view;


    if (edit) {
      view  = <EditProfile profile={profile} submit={this.submit} />
    } else {
      view = <Profile profile={profile} edit={this.edit}/>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 background-image"></div>
          <div className="col-md-7 py-4 content">
            <div className="px-md-3">
              <img src="/logo.svg" className="img-fluid" />
              {view}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
