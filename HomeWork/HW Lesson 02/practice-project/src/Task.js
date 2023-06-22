const Task = (props) => {
    return (
        <div className="element">
            <input type="radio" />
            <h3 className="task">{props.task}</h3>
        </div>
    )
}

export default Task;