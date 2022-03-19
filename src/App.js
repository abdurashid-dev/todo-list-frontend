import React, {Component} from 'react';
import Form from "./components/Form";
import axios from "axios";
import TaskList from "./components/TaskList";
import Loader from "./components/Loader";

class App extends Component {
    state = {
        tasks: [],
        loader: false,
        url: "http://127.0.0.1:8000/api/todo/",
    }
    getTodo = async () =>{
        this.setState({
            loader: true
        })
        const tasks = await axios.get(this.state.url)
        this.setState({tasks: tasks.data.todos, loader: false})
    }
    componentDidMount() {
        this.getTodo();
    }
    deleteTask = async (id) => {
        this.setState({loader: true})
        await axios.delete(this.state.url + id)
        this.getTodo();
    }
    onDelete = id =>{
        this.deleteTask(id);
        // console.log('app', id)
    }
    completeTask = async (id) => {
        this.setState({loader: true})
        await axios.post(`${this.state.url}${id}/complete`, {
            completed: true
        })
        this.getTodo();
    }
    onComplete = id =>{
        this.completeTask(id);
    }
    render() {
        return (
        <div className="App">
            <div className="container mt-3">
                <Form/>
                <div className="card mt-3">
                    <div className="card-header">
                        Tasks
                    </div>
                    <div className="card-body">
                        {this.state.loader ? <Loader /> : <TaskList tasks={this.state.tasks} onDelete={this.onDelete} onComplete={this.onComplete}/>}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;