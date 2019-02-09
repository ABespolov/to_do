import React from "react";
import TodoListItem from "../todoListItem";
import './style.css';

class TodoList extends React.Component {


    render() {
        const {onDeleted, itemDone, markImportant} = this.props;
        const elements = this.props.todos.map(item => {
            return (
                <li key={item.id}>
                    <TodoListItem {...item}
                     onDeleted={(e) => {
                        e.stopPropagation();
                        onDeleted(item.id)
                    }}
                    itemDone={(e) => {
                        e.stopPropagation();
                        itemDone(item.id)
                    }}
                    markImportant={(e) => {
                        e.stopPropagation();
                        markImportant(item.id);
                    }}
                    />
                </li>
            );
        });

        return <ul className="taskList">{elements}</ul>
    }
}

export default TodoList;