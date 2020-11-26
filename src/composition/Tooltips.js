import React from 'react';
import './Tooltips.css'

function Tooltip(props) {
    return (
        <span className='Tooltip'>
            <span
                className='Tooltip-content'
                style={{ color: props.color }}
            >
                {props.children}
            </span>
            <div className='Tooltip-message'>
                {props.message}
            </div>
        </span>
    )
}



class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800',
    };
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.change = this.change.bind(this);
    }
    change(e) {
        this.state.clicked === false
        ? this.setState({ clicked: true })
        : this.setState({ clicked: false });
        console.log(this.state.clicked)
    };
    render() {
        return (
            <div>
                <span className='Tooltip'>
                    <span
                        className='Tooltip-content'
                        style={{ color: this.props.color }}
                    >
                        {this.props.children}
                    </span>
                    <div className='Tooltip-message'>
                        {this.props.message}
                    </div>
                </span>
                <button onClick={this.change}>Button</button>
                {this.state.clicked === false && <p>Clicked State is False</p>}
            </div>
        )
    }
}

export default TooltipClass;