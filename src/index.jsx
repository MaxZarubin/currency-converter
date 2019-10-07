import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles";

class HelloWorld extends React.Component {
    render () {
        return <span>Hello, Peppa!</span>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));