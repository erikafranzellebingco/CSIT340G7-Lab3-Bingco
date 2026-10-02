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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
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
  const part1 = {
    name: "Project Management for IT",
    exercises: 3,
  };
  const part2 = {
    name: "Data Analytics 1",
    exercises: 3,
  };
  const part3 = {
    name: "Information Management 2",
    exercises: 3,
  };

  const name = "Erika Franzelle Robedizo Bingco";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
