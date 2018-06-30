import React, {Component} from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {isFlipped: false};
    // }

    // clickHandler() {
    //     this.setState({ isFlipped: !this.state.isFlipped });
    // };

    render() {

        let MemoryCardInnerClass = "MemoryCardInner";

        if (this.props.isFlipped) {
            MemoryCardInnerClass += " flipped";
        };

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={MemoryCardInnerClass}>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
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
