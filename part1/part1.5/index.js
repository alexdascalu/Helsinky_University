import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
}

  const Header = () => {
    return (
      <div>
        <h1> {course.name} </h1>
      </div>
    )
  }

  const Content = (props) => {
    const list = props.course.parts.map(function(item) {
      return (
        <div >
          <p> {item.name}: {item.exercises}</p>
        </div>
      )
    })
    
    return list
  };

  const Total = (props) => {
    let sum = 0
    
    props.course.parts.map(function(item){
      
    sum = sum + item.exercises
      
      return sum
    })

    return (
      <div>
        <p>Number of exercises: {sum}</p>
      </div>
    )
  };

  return (
    <div>
      <Header />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))