import React from 'react';

class HelloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {who: 'Click a Button'};
        this.world = this.world.bind(this);
        this.friend = this.friend.bind(this);
        this.react = this.react.bind(this);
    }
    world(){
        this.setState({who: 'world!'})
    }
    friend(){
        this.setState({who: 'friend!'})
    }
    react(){
        this.setState({who: 'react!'})
    }
    render(){
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.world}>World</button>
                <button onClick={this.friend}>Friend</button>
                <button onClick={this.react}>React</button>
            </div>
        )
    }
}

export default HelloWorld;