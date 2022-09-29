import React from "react";
interface Quote {
    text: string
    author: string
}
class QuoteBox extends React.Component<{q:Quote}>{
    componentDidMount(): void {
        this.setState({ quote: this.props.q });
    }
    render(): React.ReactNode {
        return (<div className="QuoteBox">
            <p>
                {this.props.q.text}
            </p>
            <br />
            <p style={{textAlign: "right"}}>
                - {this.props.q.author}
            </p>
        </div>)
    }
}
export default QuoteBox;