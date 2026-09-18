const App = () => {
  const course = 'Industry Elective 1'
  const part1 = 'Project Management for IT'
  const exercises1 = 3
  const part2 = 'Data Analytics 1'
  const exercises2 = 3
  const part3 = 'Information Management 2'
  const exercises3 = 3
  const name = 'Erika Franzelle R. Bingco'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <footer>
        <p>{name} - {courseCode} - {section}</p>
      </footer>
    </div>
  )
}

export default App
