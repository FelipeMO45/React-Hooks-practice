import  LazyLoad  from "./components/LazyLoad";
import ToDoList from "./components/todolist";
import Counter from './components/useReducer';
import Form from './components/form';
import Stopwatch from "./components/Cronometro";
import ImagePreviewer from "./components/prevImagen";

const App = () => {
  return (
    <>
    <Counter/>
    <LazyLoad/>
    <ToDoList/>
    <Form/>
    <Stopwatch/>
    <ImagePreviewer/>
    </>
  );
};

export default App;
