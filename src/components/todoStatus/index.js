import React from 'react';
import './style.css';

const TodoStatus = ({todo, done}) =>{
    return <p className="todoStatus">{todo} more to do, {done} done</p>;
}

export default TodoStatus;