import { useRef, useState } from "react"

export const AddTask = ()=>{
    // const [task,setTask] = useState('')
    const taskrefvalue = useRef('')
    const [progress,setProgress] = useState(false)

    //first way to write this code
    // const handleTaskInput =(e)=>{
    //     e.preventDefault()
    //     // setTask(e.target.value)
    //     console.log("taskrefvalue",taskrefvalue.current.value)
    // }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTask = {
            id:Math.floor(Math.random()*1000),
            name:taskrefvalue.current.value,
            completed:Boolean(progress),
        }
        handleReset()
    }
    const handleReset=()=>{
        // setTask('')
        if (taskrefvalue.current) {
            taskrefvalue.current.value = ""; // Reset the value to an empty string
          }
        setProgress('')
    }
    return(
        <section className="add-task">
            <form onSubmit={handleSubmit}>
                {/* <input type="text" onChange={(e)=>setTask(e.target.value)} className="task-name" name="taskname" placeholder="Enter the task" value={task} autoComplete="off"/> */}
                <input type="text" className="task-name" name="taskname" placeholder="Enter the task" ref={taskrefvalue} autoComplete="off"/>
               <select className="progress-btn" onChange={(e)=>setProgress(e.target.value)} value={progress}>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
               </select>
                <button className="add-task-btn">Add Task</button>
                <span className="task-reset-btn" onClick={handleReset}>Reset</span>
            </form>
            {/* <p>{taskrefvalue.current}</p> */}
        </section>
    )
}