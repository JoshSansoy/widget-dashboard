import styles from './Todo.module.css';
import {useState} from 'react';

function ToDo(){

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');

    function addTask(){
        if(name != ''){
            setTasks([...tasks,
                <div className={styles.Task}>
                    <p>{name}</p>
                </div>
            ])
        }
    }

    function updateName(e){
        setName(e.target.value)
    }

    return(
        <div className={styles.Wrapper}>
            <div className={styles.ToDo}>
                <div className={styles.TaskView}>
                    {tasks}
                </div>
                <input type="text" value={name} onChange={updateName}></input>
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}

export default ToDo;