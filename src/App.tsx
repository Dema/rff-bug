import React from 'react';
import {FieldRenderProps, Form, Field } from 'react-final-form'
import './App.css';


type InputProps = React.ComponentProps<"input"> &
  FieldRenderProps<string, HTMLInputElement /* HTMLElement */>;


const Input: React.FunctionComponent<InputProps> = ({
  input,
  meta,
  ...rest
}) => {
  
  return (
    <>
      {" "}
      <input
        
        type="text"
        {...input}
        {...rest}
      />
      
    </>
  );
};



const App: React.FC = () => {
  return (
    <div className="App">
      <Form onSubmit={() => { }} render={() => {
        return <Field component={Input} name="f"/>
      }}/>
    </div>
  );
}

export default App;
