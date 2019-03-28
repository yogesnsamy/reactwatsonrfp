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
      <div>
        <br />
        <div className='ui container'>
          <div className='ui segment'>
            <h3 class='ui block header'>
              RFP Automation with Watson Discovery
            </h3>

            <Search onFormSubmit={this.onTermSubmit} />
            <AnswersList answers={this.state.results} />
            <p />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
