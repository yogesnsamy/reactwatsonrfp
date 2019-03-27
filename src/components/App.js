import React from 'react';
import Search from './Search';
import discovery from '../apis/discovery';
import AnswersList from './AnswersList';

class App extends React.Component {
  state = { results: [] };
  onTermSubmit = async (term, product) => {
    const response = await discovery.get(
      '/query?count=3&deduplicate=false&highlight=true&passages=true&passages.count=3',
      {
        params: {
          natural_language_query: term,
          filter: `product::"${product}"`,
          highlight: true
        }
      }
    );

    this.setState({
      results: response.data.results
      // selectedVideo: response.data.items[0]
    });
  };
  render() {
    return (
      <div className='ui raised very padded text container segment'>
        <h2 className='ui header'>RFP Automation with Watson Discovery</h2>
        <Search onFormSubmit={this.onTermSubmit} />
        <AnswersList answers={this.state.results} />
        <p />
      </div>
    );
  }
}
export default App;
