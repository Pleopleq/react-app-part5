import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'The best way to get a project done faster is to start sooner - Jim Highsmith',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time. - Tom Cargill',
  'How does a project get to be a year late?... One day at a time. - Fred Brooks',
  'Program testing can be used to show the presence of bugs, but never to show their absence! - Edsger Dijkstra',
  ' Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler',
  'Program testing can be used to show the presence of bugs, but never to show their absence! -Edsger Dijkstra'
]

const Button = ({onClick , text}) =>{
  return (
  <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ uiDisplay }) =>{
  return (
    <p>Has {uiDisplay} votes</p>
  ) 
}

const App = (props) =>{
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0)

  const votesForEach = [0,0,0,0,0,0]
  const copyOfVotes = [...votesForEach];

  const nextButton = () => setSelected(Math.floor(Math.random() * 5))
  const voteButton = () => setVote(vote + 1)

  return (
  <div>
    <h1>Quotes for Software Engineers</h1>
    <p>{props.anecdotes[selected]}</p>
    <Button onClick={nextButton} text={'Get a quote'}/>
    <Display uiDisplay={copyOfVotes[selected]}/>
    <Button onClick={voteButton} text={'Vote the quote'}/>
  </div>
  
  )
}

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);


