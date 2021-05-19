import Widgets from './components/Widgets'
import MainNavigation from './components/ui/MainNavigation'
import Calculator from './components/Calculator';
import { useState } from 'react'


function App() {

  const [activeWidgets, setActiveWidgets] = useState([])

  function manageWidgets(){
    setActiveWidgets([...activeWidgets, <Calculator/>])
  }

  return (
    <MainNavigation manageWidgets={manageWidgets}>
      <Widgets activeWidgets={activeWidgets}/>
    </MainNavigation>
  );
}

export default App;
