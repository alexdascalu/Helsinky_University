import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let good = props.value.good;
  let neutral = props.value.neutral;
  let bad = props.value.bad;
  let total = good + neutral + bad;

  if (total !==0 ) {
    return (
      <div>
        <h2>statistics</h2> 
        <table><tbody>
        <Statistic text = "good" value = {good} />
        <Statistic text = "neutral" value = {neutral} />
        <Statistic text = "bad" value = {bad} />
        <tr><td>all</td><td>{total}</td></tr>
        <tr><td>average</td><td>{(good - bad)/total}</td></tr>
        <tr><td>positive</td><td>{(good/total) * 100}%</td></tr>
        </tbody></table>

      </div>
    ) 
  } else {
    return (
       <div>
         <p> No feedback given</p>
       </div>
    );
  }
}

const Button = (props) => {

  const {onClick, text} = props
  return (
    <button onClick = {onClick}> {text}
  </button>
  )
}

const Header = props => <p>{props.value}</p>


const App = () => {

  const [ clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const handleGoodClick = () => {
    const newClicks = {
      good: clicks.good + 1,
      neutral: clicks.neutral,
      bad: clicks.bad
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      good: clicks.good ,
      neutral: clicks.neutral + 1,
      bad: clicks.bad
    }
    setClicks(newClicks)
  }
 
  const handleBadClick = () => {
    const newClicks = {
      good: clicks.good ,
      neutral: clicks.neutral,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        <h2><Header value = "give feedback" /></h2>
            <Button onClick = {handleGoodClick} text = "Good" />
            <Button onClick = {handleNeutralClick} text = 'Neutral' />
            <Button onClick = {handleBadClick} text = 'Bad'  />
      </div>
          <Statistics value = {clicks} /> 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

