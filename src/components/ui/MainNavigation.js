import Styles from './MainNavigation.module.css';
import { Fragment } from 'react';

function MainNavigation(props) {

    return(
        <Fragment>
            <div className={Styles.Wrapper}>
                <div className={Styles.Header}>
                    <h1>Widget Dashboard</h1>
                </div>
                <div className={Styles.Sidebar}>
                    <div className={Styles.Controls}>
                        <h3>Widgets</h3>
                        <div>
                            <p>Calculator</p>
                            <button onClick={() => props.manageWidgets('calculator')}>+</button>
                        </div>
                        <div>
                        <p>To-Do</p> 
                            <button onClick={() => props.manageWidgets('todo')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <main className={Styles.Main}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default MainNavigation