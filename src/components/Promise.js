import React from 'react';
import axios from 'axios';
export default class Promise extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios
      .get('https://reqres.in/api/users?page=1')
      .then(data => this.setState({ users: data.data.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  getUsers = async () => {
    let res = await axios.get('https://reqres.in/api/users?page=1');
    let { data } = await res.data;
    this.setState({ users: data });
  };

  render() {
    return (
      <div>
        {this.state.users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          this.state.users.map((e, i) => {
            return <div key={i}>{e.first_name}</div>;
          })
        )}
      </div>
    );
  }
}
