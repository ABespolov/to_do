import React from "react";
import './style.css';

class TodoListItem extends React.Component {


    render() {
        const {label, onDeleted, itemDone, markImportant, done, important} = this.props;

        let itemClass = done ? "todoListItem done" : "todoListItem";
        itemClass = important ? itemClass + ' important' : itemClass;
        //let itemClass = "todoListItem";

        return (
            <div className={itemClass} onClick={itemDone}>
                <span>{label}</span>
                <div className="manageTaskPanel">
                    <div className="taskPanelButton" onClick={onDeleted}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                    <div className="taskPanelButton" onClick={markImportant}>
                        <i className="fa fa-exclamation" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListItem;