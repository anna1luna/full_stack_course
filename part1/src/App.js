const Header = () => {
  const course = 'Half Stack application development'
  return (
  <h1>{course}</h1>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3/>
     
    </div>
  )
}

const Part1 = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return (
    <p> {part1} { exercises1}</p>
  )
}
const Part2 = () => {
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  return (
    <p> {part2} { exercises2}</p>
  )
}
const Part3 = () => {
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <p> {part3} { exercises3}</p>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const ttl = exercises1 + exercises2 + exercises3
  return (
    <div> Number of exercises {ttl} </div>
  )

}
const App = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App