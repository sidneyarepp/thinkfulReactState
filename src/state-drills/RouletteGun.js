import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8,
        numberOfChambers: 8
    }
    constructor(props){
        super(props);
        this.state={
            chamber: this.props.bulletInChamber,
            spinningTheChamber: false,
            message: '',
        };
        this.chamberStatus = this.chamberStatus.bind(this);
        this.pullTrigger = this.pullTrigger.bind(this);
    }
    pullTrigger(){
        const randomNumber = Math.floor(Math.random() * this.props.numberOfChambers + 1);
        console.log(randomNumber, this.state.chamber, this.props.numberOfChambers)
        if(this.state.chamber === randomNumber){
            this.setState({spinningTheChamber: false, message: 'Bang!!!!'});
        } else {
        this.setState({spinningTheChamber: false, message: 'you\'re safe'});
        }
    }
    chamberStatus(){
        if(!this.state.spinningTheChamber){
            this.setState({spinningTheChamber: true, message: 'spinning the chamber and pulling the trigger! ...'});
            setTimeout(this.pullTrigger, 2000)
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.chamberStatus}>Pull the Trigger</button>
            </div>
        )
    }
}

export default RouletteGun;