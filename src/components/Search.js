import React from 'react';

class Search extends React.Component {
  state = { term: '', product: 'commerce' };

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
          <div className='field'>
            <div className='fields'>
              <div className='four wide field'>
                <select onChange={this.onInputChangeProduct}>
                  <option value='commerce'>Commerce</option>
                  <option value='websphere-portal'>WebSphere Portal</option>
                </select>
              </div>
              <div className='twelve wide field'>
                <input
                  value={this.state.term}
                  onChange={this.onInputChangeText}
                  type='text'
                  placeholder='Search...'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
