import React from 'react' // Used for class component
import {PropTypes} from 'prop-types';

const Button = (props) => {
    let klass = `btn btn--${props.variant}`;
    if(props.hasOwnProperty('className')){
        klass += " "+props.className;
    }
    if(props.hasOwnProperty('size')){
        klass += ` btn--${props.size}`;
    }
    // ${props.hasOwnProperty('className')? props.className :""}
    return(
        <button className={klass} onClick={props.onClick} > {props.children} </button>
        // <button> {props.label} </button>
    );
}

Button.defaultProps = {
    variant: "secondary",
    onClick: () => {}
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export class Btn extends React.Component {
    render() {
        return (
            <button > class Base Button </button>
        )
    }
}

export default Button;