import { Component } from 'react'; 

interface ChildComponentProps {
  submit: (profile: any) => void,
  profile: {
    firstName: string,
    lastName: string,
    bio: string,
    interests: Array<String>
  },
};

interface AppState {
  firstName: string,
  lastName: string,
  bio: string,
  interests: Array<String>,
  currentInterest: string
};


export default class EditProfile extends Component<ChildComponentProps, AppState> {

  constructor(props: ChildComponentProps) {
    super(props)
    this.submit = this.submit.bind(this);
    this.addInterest = this.addInterest.bind(this);
    this.removeInterest = this.removeInterest.bind(this);    
  }

  submit() {
    this.props.submit(this.state);
  }

  addInterest() {
    const interests = this.state.interests
    const interest = this.state.currentInterest;

    if (interest && !interests.includes(interest)) {
      interests.push(interest);
    }
    
    this.setState({ interests: interests, currentInterest: '' });
  }

  removeInterest(e:any, index: number) {
    e.preventDefault();
    const interests = this.state.interests
    interests.splice(index, 1);
    this.setState({ interests: interests});
  }

  handleInput(e: any, type: any) {
    this.setState({ ...this.state, [type]: e.target.value });
  }


  componentWillMount(){
    this.setState({
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      bio: this.props.profile.bio,
      interests: this.props.profile.interests,
      currentInterest: ''
    });
  }

  render() {

    const profile = this.state;
    const interests = this.state.interests;

    return (
      <div className="profile-form px-2 px-md-3 pt-3">
        <h1>Create Profile</h1>
        <div className="form-group">
          <label className="d-block">First Name</label>
          <input type="text" className="form-control" value={profile.firstName} onChange={(e) => this.handleInput(e, 'firstName')} />
        </div>
        <div className="form-group">
          <label className="d-block">Last Name</label>
          <input type="text" className="form-control" value={profile.lastName} onChange={(e) => this.handleInput(e, 'lastName')}  />
        </div>
        <div className="form-group">
          <label className="d-block">Bio</label>
          <textarea className="form-control" value={profile.bio} onChange={(e) => this.handleInput(e, 'bio')}></textarea>
        </div>
        <div className="form-group">
          <label className="d-block">Tech Interests</label>
          <div className="interestsInput">
            <input className="form-control d-inline-block" type="text" value={profile.currentInterest}  onChange={(e) => this.handleInput(e, 'currentInterest')}/>
            <button  onClick={this.addInterest} className="ml-2 d-inline-block">
              <img src="./addButton.svg" className="img-fluid" />
             </button>
          </div>
          <div className="d-flex mt-3">
            {interests.map((interest, key) => 
              <div className="interest-item mr-2" key={key}>
                <span className="d-inline-block">{interest}</span>
                <a href="#" className="d-inline-block" onClick={(e)=> this.removeInterest(e, key)}>
                  <img src="./removeButton.svg" className="img-fluid" />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="form-actions text-md-center">
          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }

}