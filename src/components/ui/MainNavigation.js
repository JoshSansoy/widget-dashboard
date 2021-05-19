import Styles from './MainNavigation.module.css'

function MainNavigation() {

    return(
        
        <div>
            <div className={Styles.Header}>
                <a>Widget Dashboard</a>
            </div>
            <div className={Styles.Sidebar}>
                <div>
                    <h3>Controls</h3>
                    <a>Calculator</a> <button>+</button>
                    <a>To-Do</a> <button>+</button>
                </div>
            </div>
            
        </div>
    )
}

export default MainNavigation