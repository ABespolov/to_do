import React from "react";

const TodoListItem = ({label, important}) => {
    const style = {
        color: important ? "tomato" : "black"
    }
    return (
        <div className="todoListItem">
            <span style={style}>{label}</span>
            <div className="manageTaskPanel">
                <div className="taskPanelButton"><i className="fa fa-trash" aria-hidden="true"></i></div>
                <div className="taskPanelButton"><i className="fa fa-exclamation" aria-hidden="true"></i></div>
            </div>
        </div>
    );
}

export default TodoListItem;