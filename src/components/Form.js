import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Form for todo</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="task" className="form-label">
                Task
              </label>
              <input
                type="text"
                name="task"
                placeholder="Write your task"
                className="form-control"
              />
              <input
                type="submit"
                className="btn btn-primary float-end mt-3"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
