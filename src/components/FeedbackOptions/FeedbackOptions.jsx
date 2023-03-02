import React from "react";
import PropTypes from 'prop-types';
import { ButtonList, Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
     <ButtonList>
        {options.map(option => 
      (<li key={option}>
        <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>)
        )}
    </ButtonList>
)

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;