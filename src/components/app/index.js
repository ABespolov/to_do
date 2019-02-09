import React from "react";
import './style.css';
import Header from '../header';
import Search from '../search';
import TodoList from '../todoList';
import TodoStatus from '../todoStatus';
import AddItem from '../addItem';


class App extends React.Component {

    state = {
        todoData: [
            {label: "Drink Coffee", done: false, important: false, id: 1},
            {label: "Make App", done: false, important: true, id: 2},
            {label: "Have a lunch", done: false, important: false, id: 3}
        ],
        maxId: 100
    }

    onDeleted = (id) => {
        this.setState(({todoData}) => {
            const newData = todoData.filter((item) => {
                return item.id !== id;
            })
            return {
                todoData: newData
            }
        })
    }

    addItem = (label) => {
        this.setState(({todoData, maxId}) => {
            const newData = [].concat(todoData);
            newData.push({label: label, done: false, important: false, id: maxId});
            return {
                todoData: newData,
                maxId: maxId + 1
            }
        })
    }

    itemDone = (id) => {
        this.setState(({todoData}) => {
            const newData = todoData.slice();
            const index = newData.findIndex(item => item.id === id);
            newData[index].done = !newData[index].done;
            return {
                todoData: newData
            }
        })
    }

    markImportant = (id) => {
        this.setState(({todoData}) => {
            const newData = todoData.slice();
            const index = newData.findIndex(item => item.id === id);
            newData[index].important = !newData[index].important;
            return {
                todoData: newData
            }
        })
    }

    getDoneCount = () => {
        return this.state.todoData.filter(item => item.done).length
    }

    onSearch = (text) => {
        console.log(text);
        this.setState(({todoData}) => {
            const newData = todoData.filter(item => item.label.indexOf(text) >= 0);
            const tailData = todoData.filter(item => item.label.indexOf(text) < 0);

            return {
                todoData: newData.concat(tailData)
            }
        })
    }

    render() {

        return (
            <div className="wrapper">
                <Header/>
                <TodoStatus todo={this.state.todoData.length - this.getDoneCount()}
                            done={this.getDoneCount()}/>
                <Search onSearch={(text) => this.onSearch(text)}/>
                <TodoList todos={this.state.todoData}
                          onDeleted={(id) => this.onDeleted(id)}
                          itemDone={(id) => this.itemDone(id)}
                          markImportant={(id) => this.markImportant(id)}
                />
                <AddItem addItem={(label) => this.addItem(label)}/>
            </div>

        );
    }
}

export default App;