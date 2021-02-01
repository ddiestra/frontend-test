import React, { Component } from 'react'; 


interface ChildComponentProps {
  edit: () => void,
  profile: {
    firstName: string,
    lastName: string,
    bio: string,
    interests: Array<String>
  },
};

export default class Profile extends Component<ChildComponentProps> {

  constructor(props: ChildComponentProps) {
    super(props)
    this.edit = this.edit.bind(this);
  }

  edit() {
    this.props.edit();
  }

  render() {
    const profile = this.props.profile;
    const interests = profile.interests;

    return (
      <div className="profile px-2 px-md-3 pt-3">
        <h1>{profile.firstName} {profile.lastName}</h1>
        <div className="form-group">
          <label className="d-block">A little bit about me: </label>
          <div>{profile.bio}</div>
        </div>
        <div className="form-group">
          <label className="d-block">Tech I am interested In: </label>
          <ul className="d-flex pl-3">
            {interests.map((interest, key) => 
              <li key={key} className="interest-item mr-4">{interest}</li>
            )}
          </ul>
        </div>
        <div className="form-actions mt-5">
          <button onClick={this.edit}>Edit</button>
        </div>
      </div>
    )
  }

}