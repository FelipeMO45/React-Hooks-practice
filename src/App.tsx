import  LazyLoad  from "./components/LazyLoad";
import ToDoList from "./components/todolist";
import Counter from './components/useReducer';
import Form from './components/form';

const App = () => {
  return (
    <>
    <Counter/>
    <LazyLoad/>
    <ToDoList/>
    <Form/>
    </>
  );
};

export default App;
