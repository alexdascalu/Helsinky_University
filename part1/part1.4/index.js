import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  
  }
  ]
  const Header = (props) => {
    return (
      <div>
        <h1> {props.course} </h1>
      </div>
    )
  }

  const Content = (props) => {
    const list = props.parts.map(function(item) {
      return (
        <div >
          <p> {item.name}: {item.exercises}</p>
        </div>
      )
    })
    
    return list
  };

  const Total = (props) => {
    let sum =  props.parts.reduce(function(prev, current){
      return prev + +current.exercises
    },0)
    return (
      <div>
        <p>Number of exercises: {sum}</p>
      </div>
    )
  };

  return (
    <div>
      <Header  course={course} />
      <Content  parts={parts} />
      <Total  parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))