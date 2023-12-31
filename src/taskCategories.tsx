import React from 'react';
import { TaskList } from './TaskList';
//todo make catnames headers
  interface Category {
    codename: string;
    userFacingString: string;
  }
  export const categoryInfo: Category[]= [
  {
  codename: "lifeAdmin",
  userFacingString:'Life Admin' 
}, 
 { 
  codename: "soulGrowing", 
  userFacingString: 'Soul Growing',
 },
 {
  codename: "homeChores", 
  userFacingString: 'Home Chores'
 }

]
interface categoryProps {
    tasks: Task[];
    toggleTodo: ToggleTodo;
  }
 export function getCategoryList (categoryName: string, taskList: Task[]): Task[] {
  return taskList.filter((task) => task.category === categoryName
  )}
  export const CategoryDiv: React.FC<categoryProps> = ({ tasks, toggleTodo}) => {
    return (
        <div>
        {categoryInfo.map((eachCategory) => 
      <div id = {eachCategory.codename} className = "categoryBox">
    {`${eachCategory.userFacingString}`} 
    <TaskList tasks={getCategoryList(eachCategory.codename,tasks)} toggleTodo={toggleTodo} />
        
      </div>
        )}
        </div>
    );
  };