import React, {Component} from "react";

class TaskList extends Component {
    render() {
        return (
            <div className="p-3">
                <table className="table table-bordered">
                    <thead style={{width: "100px"}}>
                    <tr>
                        <th style={{width: "50px"}}>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Playing football</td>
                        <td>Status</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-sm btn-success">
                                    <i className="fa fa-check"/>
                                </button>
                                <button className="btn btn-sm btn-danger">
                                    <i className="fa fa-times"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;
