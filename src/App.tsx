import './App.css';
import React from 'react';
interface Quote {
  text: string
  author: string
}
class App extends React.Component<{},{ quotes: Quote[] }> {
  constructor(props:any) {
    super(props);
    this.state = {
      quotes: [{text:"",author:""}]
    }
  }
  componentDidMount() {
    console.log()
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((q) => {
        this.setState({ quotes: q} );
      },
        (error:Error) => {
          alert(error);
        })
  }
  render() {
    const num =Math.floor(Math.random() * this.state.quotes.length)
    return (
      <div>
        <p>
          {this.state.quotes[num].text}
          <br/>
          {this.state.quotes[num].author}
        </p>
      </div>
    );
  }
}

export default App;