import React from 'react';
import { Wrapper, Button } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrapper>
            {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}

         </Wrapper>
        
    )
}
    
 