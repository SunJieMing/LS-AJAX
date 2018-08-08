import React from 'react';

class FriendsForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
          this.props.history && this.props.history.push('/friends');
          this.setState({
            name: '',
            age: '',
            email: ''
          });
        }}
      >
        <h2>{this.props.title}</h2>
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FriendsForm;
