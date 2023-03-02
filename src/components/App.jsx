import React, {useState} from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviews = { good, neutral, bad };

  const onFeedbackBtnClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
    
      default:
        break;
    }
}

  const countTotalFeedback = () => {
      let total = good + neutral + bad;
      return total;
  }

  const countPositiveFeedbackPercentage = () => {
      let percentage = good / (countTotalFeedback()) *100;
      if (!percentage) {
          return 0;
      }
      return Math.round(percentage);
  }

      return (
          <div
          style={{
            fontSize: 40,
            color: '#010101'
          }}>
              <Section title="Please leave feedback">
                <FeedbackOptions
                  options={Object.keys(reviews)}
                  onLeaveFeedback={onFeedbackBtnClick} 
                >
                </FeedbackOptions>
                </Section>
              <Section title="Statistics">
                {countTotalFeedback() === 0 
                ? (<Notification message="There is no feedback"></Notification>) 
                : (<Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={countTotalFeedback()} 
                    positivePercentage={countPositiveFeedbackPercentage()}>
                    </Statistics>)}
                </Section>
          </div>
      )
}

export default App;
