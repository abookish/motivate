import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title, {Warning} from './beautifulTitle';
import { TaskList } from './TaskList';
import { AddTaskForm } from './Forms/addTaskForm';
import {CategoryDiv } from './taskCategories';
/*app todos:
-handle empties
-hint text for text box
-star toggle
-star section
-cat names
-app icon
-make it pretty
  -smaller sections, hide sections
*/
//todo get rid of
const startingList: Task[] = [];

function App() { 
  
  const [tasks, setTodos] = useState(startingList);
//toggle function todo abstract
  const toggleTodo = (selectedTodo: Task) => {
    const newTasks = tasks.map((task: Task) => {
      if (task === selectedTodo) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });
    setTodos(newTasks);
  };
  
  const addTask: AddTask = (text: string, category?: string | null) => {
    const newTask = { text, complete: false, category};
    setTodos([...tasks, newTask]);
  };
  return  <> 
  <Warning warningText="WIP don't judge me"/>
   <Title title="let's motivate" subtitle = 'submerge  in the task'/>
   <div className="categoriesBox">
    <CategoryDiv tasks={tasks} toggleTodo={toggleTodo}/>
    </div>
    <AddTaskForm addTask={addTask}/>
  </>
}

export default App;
