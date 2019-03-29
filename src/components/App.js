import React from 'react';
import Search from './Search';
import discovery from '../apis/discovery';
import AnswersList from './AnswersList';
// import Promise from './Promise';

class App extends React.Component {
  state = { results: [], searching: 'notyet', selectedAnswer: null };

  onTermSubmit = async (term, product) => {
    this.setState({ searching: 'currently' });
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
    const data = await response.data.results;
    this.setState({
      results: data,
      searching: 'done'
      // selectedVideo: response.data.items[0]
    });
  };

  // onAnswerSelect = answer => {
  //                              this.setState({
  //                                selectedAnswer:
  //                                  answer.answer
  //                              });
  //                              //--------

  onAnswerSelect = answer => {
    this.setState({
      selectedAnswer: answer.answer
    });
    const el = document.createElement('textarea');
    el.value = answer.answer;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return;
  };
  //-----------
  //  };

  render() {
    return (
      <div>
        <br />
        <div className='ui container'>
          <div className='ui segment'>
            <h3 className='ui block header'>
              RFP Automation with Watson Discovery
            </h3>
            <Search onFormSubmit={this.onTermSubmit} />
            <AnswersList
              answers={this.state.results}
              searching={this.state.searching}
              onAnswerSelect={this.onAnswerSelect}
            />
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default App;
