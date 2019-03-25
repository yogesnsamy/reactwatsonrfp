import React from 'react';
import Search from './Search';
import discovery from '../apis/discovery';

class App extends React.Component {
  onTermSubmit = async (term, product) => {
    const response = await discovery.get('/query', {
      params: {
        natural_language_query: term,
        filter: `product::"${product}"`,
        highlight: true
      }
    });

    this.setState({
      videos: response.data.results
      // selectedVideo: response.data.items[0]
    });
  };
  render() {
    return (
      <div className='ui raised very padded text container segment'>
        <h2 className='ui header'>RFP Automation with Watson Discovery</h2>
        <Search onFormSubmit={this.onTermSubmit} />
        <p />
      </div>
    );
  }
}
export default App;
