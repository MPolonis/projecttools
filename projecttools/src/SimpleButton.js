import React, { Component } from "react";
import PropTypes from "prop-types";

export class SimpleButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            hasButtonBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
            hasButtonBeenClicked: true
        });
        this.props.callback();
    }

    render() {
        return (
            <button onClick={this.handleClick}
                className={this.props.className}
                disabled={this.props.disabled === "true" || this.props.disabled === true}>
                {this.props.text} {this.state.counter}
                {this.state.hasButtonBeenClicked && <div>Kliknięto przycisk!</div>}

            </button>
        )
    }

    static defaultProps = {
        disabled: false
    }

    static propTypes = {
        text: PropTypes.string,
        theme: PropTypes.string,
        callback: PropTypes.func,
        disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    }
}
