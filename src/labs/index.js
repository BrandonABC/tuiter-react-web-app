import {Link} from "react-router-dom";
import Nav from "../nav";
import Assignment3 from "./a3";
import Classes from "./a3/classes";
import Styles from "./a3/styles";
import ConditionalOutput from "./a3/conditional-output";
import TodoList from "./a3/todo/todo-list";

function Labs() {
    return(
       <div>
         <Nav/>
         <Assignment3/>
         <Classes/>
         <Styles/>
         <ConditionalOutput/>
         <TodoList/>
       </div>
    );
 }
 export default Labs;