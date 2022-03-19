import React, {Component} from "react";
import Task from "./Task";

class TaskList extends Component {
    onDelete = (id) => {
        this.props.onDelete(id);
        // console.log('TaskList.onDelete', id);
    };
    onComplete = (id) => {
        this.props.onComplete(id);
    };
    render() {
        const tasks = this.props.tasks;
        return (
            <div className="p-3">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th style={{width: "50px"}}>ID</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map(task => (
                        <Task key={task.id} task={task} onDelete={this.onDelete} onComplete={this.onComplete}/>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;
