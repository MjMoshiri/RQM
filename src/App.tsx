import './index.scss';
import React from 'react';
import QuoteBox from './QuoteBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
interface Quote {
  text: string
  author: string
}
class App extends React.Component<{}, { quotes: Quote[], randNum: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      quotes: [{ text: "", author: "" }],
      randNum: 0
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((q) => {
        this.setState({ quotes: q });
        this.setState({ randNum: Math.floor(Math.random() * q.length) });
      },
        (error: Error) => {
          alert(error);
        })
  }
  handleNewQuote() {
    const randNum = Math.floor(Math.random() * this.state.quotes.length)
    this.setState({ randNum: randNum })
  }
  render() {
    const twitterLink= 'https://twitter.com/intent/tweet?text='+this.state.quotes[this.state.randNum].text+'%0A'+(this.state.quotes[this.state.randNum].author ? '-' +this.state.quotes[this.state.randNum].author :'')
    return (
      <div className="QuoteBox" id="quote-box" >
        <QuoteBox q={this.state.quotes[this.state.randNum]}></QuoteBox>
        <br/>
        <button onClick={this.handleNewQuote} id="new-quote" className="NewQuote"><FontAwesomeIcon icon={faQuoteLeft} />New Quote<FontAwesomeIcon icon={faQuoteRight} /></button>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer" id="tweet-quote" className="Tweet"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    );
  }
}

export default App;