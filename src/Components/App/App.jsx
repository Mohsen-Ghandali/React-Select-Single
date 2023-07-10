import Person from "../Persons/Person";

const App = () => {
const selectCourse=(e)=>{
  console.log(e.target.value);
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2">
      <Person selectCourse={selectCourse}/>
    </div>
  );
};

export default App;
