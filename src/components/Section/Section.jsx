import React from "react";
import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from "./Section.styled";

const Section = ({title, children}) => {
    return (<FeedbackSection>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
    </FeedbackSection>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export default Section;