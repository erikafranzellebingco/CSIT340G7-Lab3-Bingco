import "./App.css";

const Header = (props) => {
  return <h1 className="course-header">{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <div className="part-card">
      <span>{props.part.name}</span>
      <span className="badge">{props.part.exercises} </span>
    </div>
  );
};

const Content = (props) => {
  return (
    <div className="content-section">
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const totalExercises =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;

  return (
    <div className="total-section">Number of Exercises: {totalExercises}</div>
  );
};

const Footer = (props) => {
  return (
    <div className="app-footer">
      {props.name} - {props.courseCode} - {props.section}
    </div>
  );
};

const App = () => {
  const course = {
    name: "Industry Elective 1",
    parts: [
      {
        name: "Project Management for IT",
        exercises: 3,
      },
      {
        name: "Data Analytics 1",
        exercises: 3,
      },
      {
        name: "Information Management 2",
        exercises: 3,
      },
    ],
  };

  const name = "Erika Franzelle R. Bingco";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div className="app-container">
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
