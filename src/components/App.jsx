import React from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends React.Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  onFeedbackBtnClick = (option) => {
      this.setState(prevState => ({
          [option]: prevState[option] + 1,
      })
  )
}

  countTotalFeedback = () => {
      let total = this.state.good + this.state.neutral + this.state.bad;
      return total;
  }

  countPositiveFeedbackPercentage = () => {
      let percentage = this.state.good / (this.countTotalFeedback()) *100;
      if (!percentage) {
          return 0;
      }
      return Math.round(percentage);
  }

  render() {
      return (
          <div
          style={{
            fontSize: 40,
            color: '#010101'
          }}>
              <Section title="Please leave feedback">
                <FeedbackOptions
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.onFeedbackBtnClick} 
                >
                </FeedbackOptions>
                </Section>
              <Section title="Statistics">
                {this.countTotalFeedback() === 0 
                ? (<Notification message="There is no feedback"></Notification>) 
                : (<Statistics 
                    good={this.state.good} 
                    neutral={this.state.neutral} 
                    bad={this.state.bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()}>
                    </Statistics>)}
                </Section>
          </div>
      )
  }
}

export default App;
