import React,{ useState} from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!title || !salary)
        {
            alert("Title or Salary cannot be empty");
        }
        else
        {
            props.addtodo(title,salary);
        setTitle("");
        setSalary("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>
                Add a Todo
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" value={salary} onChange={(e)=> setSalary(e.target.value)} className="form-control" id="salary" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
