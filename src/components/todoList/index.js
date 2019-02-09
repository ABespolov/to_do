import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {

    const elements = todos.map(item => {
        const {id, ...todoItem} = item;
        return(
            <li key={id}><TodoListItem {...todoItem}/></li>
        );
    });

    return <ul className="taskList">{elements}</ul>
}

export default TodoList;