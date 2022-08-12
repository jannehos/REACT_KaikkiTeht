import logo from './logo.svg';
import './App.css';

/*
const Header = (props) =>{
return (
<div>
<h1>{props.course}</h1>

</div>
)
}
const Content = (props) =>{
return(
 <p>{props.osio} {props.harjoitukset}</p>
)
}


const Total = (props) =>{
  return(

<p>Number of exercises: {props.inTot}</p>

  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
    
      <Content osio={part1} harjoitukset={exercises1}/>
      <Content osio={part2} harjoitukset={exercises2}/>
      <Content osio={part3} harjoitukset={exercises3}/>


      <Total inTot={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App

//**************************************************************************************** teht1.1
*/

/*

const Header = (props) =>{
  return (
  <div>
  <h1>{props.course}</h1>
  
  </div>
  )
  }
  const Content = (props) =>{
  return(
    <div>
    <Part osat={props.parts[0]}  harjoitus={props.exercises[0]} />
  
    <Part osat={props.parts[1]} harjoitus={props.exercises[1]} />
  
    <Part osat={props.parts[2]} harjoitus={props.exercises[2]} />
  
  </div>
  )
  }
  const Part = (props) => {
  
    return(
  
      <div>
  
        {props.osat} {props.harjoitus}
  
      </div>
  
    )
    }
  
  const Total = (props) =>{
    return(
  
  <p>Number of exercises: {props.inTot}</p>
  
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course}/>
      
        
        <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />

  
        <Total inTot={exercises1 + exercises2 + exercises3}/>
  
      </div>
    )
  }
  
  export default App

  // ************************************************************************************************teht.1.2
*/

/*

const Header = (props) =>{
  return (
  <div>
  <h1>{props.course}</h1>
  
  </div>
  )
  }
  const Content = (props) =>{
  return(
    <div>
    <Part osat={props.parts[0]}  harjoitus={props.exercises[0]} />
  
    <Part osat={props.parts[1]} harjoitus={props.exercises[1]} />
  
    <Part osat={props.parts[2]} harjoitus={props.exercises[2]} />
  
  </div>
  )
  }
  const Part = (props) => {
  
    return(
  
      <div>
  
        {props.osat} {props.harjoitus}
  
      </div>
  
    )
    }
  
  const Total = (props) =>{
    return(
  
  <p>Number of exercises: {props.inTot}</p>
  
    )
  }
  
  const App = () => {

    const course = 'Half Stack application development'
    const part1 = {

      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {

      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {

      name: 'State of a component',
      exercises: 14
    }
  
  
    return (
      <div>
        <h1>{course}</h1>
	  <p>{part1.name}: {part1.exercises}</p>
	  <p>{part2.name}: {part2.exercises}</p>
	  <p>{part3.name}: {part3.exercises}</p>
	  <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>

      </div>
    )
  }
  



// ************************************************************************************************teht.1.3
*/

/*
const Header = (props) =>{
  console.log(props)
  return (
  <div>
  <h1>{props.course}</h1> 
  </div>
  )
  }


  const Content = (props) =>{
    console.log(props)
  return(
    <div>
    <Part part_name={props.segmentList[0].name} ex_amount={props.segmentList[0].exercises}/>
    <Part part_name={props.segmentList[1].name} ex_amount={props.segmentList[1].exercises}/>
    <Part part_name={props.segmentList[2].name} ex_amount={props.segmentList[2].exercises}/>
 
  
  </div>
  )
  }
  const Part = (props) => {
  console.log(props)
    return(
  
      <div>
  
      <p><span className="ex-name">{props.part_name}</span> : Exercises {props.ex_amount}</p>

      </div>
  
    )
    }
  
  const Total = (props) =>{
  
  return ( 
    <p>Number of excercises: {props.segmentList[0].exercises+props.segmentList[1].exercises+props.segmentList[2].exercises}</p>
  )
  }
  
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
  
    return (
      <div>
        <Header course = {course}/> 
        
	
         <Content segmentList ={parts}/>

        
        <Total segmentList = {parts}/>

      </div>
    )
  }
  
 

  //******************************************************************************************************** teht1.4
  
*/

/*
  const Header = (props) =>{
    console.log(props)
    return (
    <div>
    <h1>{props.course}</h1> 
    </div>
    )
    }
  
  
    const Content = (props) =>{
      console.log(props)
    return(
      <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
    )
    }
    
    
    const Total = (props) =>{
    console.log(props)
    return ( 
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

    )
    }
    
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
    
    
      return (
        <div>
          <Header course = {course.name}/> 
          
    
           <Content 
           part1={course.parts[0].name } exercises1= {course.parts[0].exercises}
           part2={course.parts[1].name } exercises2= {course.parts[1].exercises}
           part3={course.parts[2].name } exercises3= {course.parts[2].exercises}
          />
          <Total 
           exercises1= {course.parts[0].exercises}
           exercises2= {course.parts[1].exercises}
           exercises3= {course.parts[2].exercises}
            />
        </div>
      )
    }

export default App;

//******************************************************************************************************** teht1.5

*/

import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> FEEDBACK</h1><br />

      <button onClick={() =>setGood(good+1)}>Good</button>
      <button onClick={() =>setNeutral(neutral+1)}>Neutral</button>
      <button onClick={() =>setBad(bad+1)}>Bad</button>
      <br />
      <h2>Good: {good}</h2>
      <h2>Neutral: {neutral}</h2>
      <h2>Bad: {bad}</h2>
    </div>
  )
}

export default App


//******************************************************************************************************** teht1.6-1.7