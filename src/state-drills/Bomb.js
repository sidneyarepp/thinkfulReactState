import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        };
        this.countupText = this.countupText.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(() => {
                this.setState({count: this.state.count + 1})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    countupText(num){
        if(num > 8){
            return this.setState({count: 0})
        } else if(num === 8){
            return 'BOOM!!!'
        } else if(num % 2 === 1 || num === 0){
            return 'tick'
        } else return 'tock'
    }
    render(){
        return(
            <div className="bomb">
                <p>{this.state.count}</p>
                <p>{this.countupText(this.state.count)}</p>
            </div>
        )
    }
}

export default Bomb;