import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.addOne = this.addOne.bind(this);
    }
    addOne(){
        this.setState({count: this.state.count + this.props.step})
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.addOne}>
            Add 1
          </button>
        </div>
      )
    }
}

export default Counter;