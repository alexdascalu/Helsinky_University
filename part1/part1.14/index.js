import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0])

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const voteChange= () => {
    let copy = [...vote]
    copy[selected]++
    setVote(copy)
  }

  const MostVoted = () => {
    const copy = [...vote]
  
    return (
      <div>
        <p>{anecdotes[copy.indexOf(Math.max.apply(Math,copy))]} <br/>
      has {Math.max.apply(Math,copy)} votes.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick = {voteChange}>vote</button>
      <button onClick = {changeAnecdote}>next anecdote</button>
      
      <h1>Anecdote with most votes</h1>
       <MostVoted />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

