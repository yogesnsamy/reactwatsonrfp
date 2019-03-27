import React from 'react';

class Search extends React.Component {
  state = { term: '', product: '' };

  onInputChangeText = event => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };

  onInputChangeProduct = event => {
    event.preventDefault();
    this.setState({ product: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log('form submit');
    this.props.onFormSubmit(this.state.term, this.state.product);
    // this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='ui input focus field'>
            <select onChange={this.onInputChangeProduct}>
              <option value='commerce'>Commerce</option>
              <option value='websphere-portal'>WebSphere Portal</option>
            </select>
          </div>

          <div className='ui icon input'>
            <input
              value={this.state.term}
              onChange={this.onInputChangeText}
              type='text'
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
