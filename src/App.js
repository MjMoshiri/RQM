import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: [{text:"",author:""}]
    }
  }
  componentDidMount() {
    console.log()
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((q) => {
        this.setState({ q: q.map(e=>this.jsObject(e)) });
      },
        (error) => {
          alert(error);
        })
  }
  jsObject(e) {
    return {
      text: e.text,
      author: e.author
    }
  }
  render() {
    const num =Math.floor(Math.random() * this.state.q.length)
    return (
      <div>
        <p>
          {this.state.q[num].text}
          <br/>
          {this.state.q[num].author}
        </p>
      </div>
    );
  }
}

export default App;