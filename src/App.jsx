import { useRef, useState } from 'react';
//custom imports:
import { Form, Container } from './components';
import useChildForm from './hooks/useChildForm';
import useParentForm from './hooks/useParentForm';
//style imports:
import './App.scss';

function App() {
  const appRef = useRef();

  const [ displayType, setDisplayType ] = useState( 'flex' ) ;

  const [ parentForm, setParentForm ] = useParentForm( displayType );
  const [ childrenForm, setChildrenForm, setChildCount ] = useChildForm( displayType );
  

  return (
    <div className= "app" ref= { appRef }>
      <Form 
        displayType = { displayType }
        setDisplayType = { setDisplayType }
        parentForm = { parentForm }
        setParentForm = { setParentForm }
        childrenForm = { childrenForm }
        setChildrenForm = { setChildrenForm }
        setChildCount = { setChildCount }
      />
      <Container 
        appRef = { appRef } 
        displayType = { displayType }
        parentForm = { parentForm } 
        childrenForm = { childrenForm }
         />
    </div>
  );
}

export default App;
