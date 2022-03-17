import React, {Component} from 'react';

class Task extends Component {
    render() {
        const {id, text, created_at, completed} = this.props.task;
        return (
            <tr>
                <td>{id}</td>
                <td>{text}</td>
                <td>{completed}</td>
                <td>{created_at}</td>
            </tr>
        );
    }
}

export default Task;