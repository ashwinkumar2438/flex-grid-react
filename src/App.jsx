import { useRef } from 'react';
//component imports:
import { Form, Container } from './components';
//style imports:
import './App.scss';

function App() {
  const appRef = useRef();
  return (
    <div className= "app" ref= { appRef }>
      <Form/>
      <Container appRef= { appRef }/>
    </div>
  );
}

export default App;
