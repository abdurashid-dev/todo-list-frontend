import React, {Component} from 'react';
import Form from "./components/Form";
import axios from "axios";
import TaskList from "./components/TaskList";

class App extends Component {
    state = {
        tasks: [],
        url: "http://127.0.0.1:8000/api/todo/",
    }
    getTodo = async () =>{
        const tasks = await axios.get(this.state.url)
        this.setState({tasks: tasks.data.todos});
    }
    componentDidMount() {
        this.getTodo();
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
                        <TaskList tasks = {this.state.tasks}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;