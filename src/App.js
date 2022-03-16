import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div className="App">
            <div className="container mt-3">
                <Form/>
                <div className="card mt-3">
                    <div className="card-header">
                        Tasks
                    </div>
                    <div className="card-body">
                        <TaskList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
