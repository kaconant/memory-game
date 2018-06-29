import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    
    constructor() {
        super();
        this.state = { isFlipped: false };
    }

    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped });
    };

    render() {

        let MemoryCardInnerClass = "MemoryCardInner";

        if (this.state.isFlipped) {
            MemoryCardInnerClass += " flipped";
        };

        console.log(MemoryCardInnerClass);

        return (
            <div className="MemoryCard" onClick={ this.clickHandler.bind(this) }>
                <div className={ MemoryCardInnerClass }>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                    <div className="MemoryCardBack">
                        <img className="CardImage" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;
