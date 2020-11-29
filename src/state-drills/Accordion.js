import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTabIndex: null };
        this.renderSections = this.renderSectionButtons.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.displayInformaiton = this.displayInformaiton.bind(this);
    }
    handleClick(index) {
        this.setState({ currentTabIndex: index })
    }
    displayInformaiton() {
        return (
            <p>{this.props.sections[this.state.currentTabIndex].content}</p>
        )
    }
    renderSectionButtons() {
        return this.props.sections.map((section, index) => (
            <li className='Accordion_item'>
                <button key={index} onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {this.state.currentTabIndex === index && this.displayInformaiton()}
            </li>
        ))
    }
    render() {
        return (
            <ul className='Accordion'>
                {this.renderSectionButtons()}
            </ul>
        )
    }
}

export default Accordion;