import  LazyLoad  from "./components/LazyLoad";
import ToDoList from "./components/todolist";
import Counter from './components/useReducer';

const App = () => {
  return (
    <>
    <LazyLoad/>
    <Counter/>
    <ToDoList/>
    </>
  );
};

export default App;
