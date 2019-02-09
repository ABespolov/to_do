import React from 'react';
import './style.css';

class AddItem extends React.Component{
    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input className="addTodoInput" onChange={this.onChange}
                       value={this.state.label} placeholder="What need to do?" type="text"/>
                <button className="addTodoButton">Add</button>
            </form>
        );
    }
}

export default AddItem;