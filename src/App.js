import Widgets from './components/Widgets';
import MainNavigation from './components/ui/MainNavigation';
import Calculator from './components/Calculator';
import ToDo from './components/ToDo';
import { useState } from 'react'


function App() {

  const [activeWidgets, setActiveWidgets] = useState([])

  function manageWidgets(widget){

    switch(widget){
        case 'calculator':
          return setActiveWidgets([...activeWidgets, <Calculator/>])
        case 'todo':
          return setActiveWidgets([...activeWidgets, <ToDo/>])
    }
  }

  return (
    <MainNavigation manageWidgets={manageWidgets}>
      <Widgets activeWidgets={activeWidgets}/>
    </MainNavigation>
  );
}

export default App;
