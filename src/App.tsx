import './index.scss';
import React from 'react';
import QuoteBox from './QuoteBox';
interface Quote {
  text: string
  author: string
}
class App extends React.Component<{}, { quotes: Quote[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      quotes: [{ text: "", author: "" }]
    }
  }
  componentDidMount() {
    console.log()
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((q) => {
        this.setState({ quotes: q });
      },
        (error: Error) => {
          alert(error);
        })
  }
  render() {
    const randNum = Math.floor(Math.random() * this.state.quotes.length)
    const randQuote = this.state.quotes[randNum]
    console.log(randQuote)
    return (
      <div >
        <QuoteBox q={randQuote}></QuoteBox>
      </div>
    );
  }
}

export default App;