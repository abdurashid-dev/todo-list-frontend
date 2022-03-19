import React, {Component} from 'react';
import Moment from 'react-moment';

class Task extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onComplete = () =>{
        this.props.onComplete(this.props.task.id);
    }
    render() {
        const {id, text, created_at, completed} = this.props.task;
        return (
            <tr className={(completed)? 'text-decoration-line-through text-secondary': 'text-danger'}>
                <td>{id}</td>
                <td>{text}</td>
                <td>
                    <Moment format="DD/MM/YYYY">{created_at}</Moment>
                </td>
                <td>{completed}</td>
                <td>
                    <div className="d-flex">
                        <button type="button" className={(completed)? 'd-none': 'btn btn-success'} onClick={this.onComplete}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Task;