import React, {Component} from "react";
import Task from "./Task";

class TaskList extends Component {
    render() {

        console.log("task", this.props.tasks)

        const tasks = this.props.tasks;
        return (
            <div className="p-3">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th style={{width: "50px"}}>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map(task => (
                        <Task key={task.id} task={task}/>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;
