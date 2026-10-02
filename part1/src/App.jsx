const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.courseCode} - {props.section}
    </p>
  );
};

const App = () => {
  const course = "Industry Elective 1";
  const parts = [
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
  ];

  const name = "Erika Franzelle R. Bingco";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
