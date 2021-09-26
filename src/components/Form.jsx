import { Fragment } from 'react';
import Select from 'react-select';
import Slider from './Slider';

//custom imports:
import formData from '../data/main';

//style imports:
import '../scss/components/Form.scss';


const options = [
    { value: 'grid' , label: 'grid' },
    { value: 'flex', label: 'flex' }
]

const InputComponent = ( { data, ...props } ) => data.type ==='slider' ? <Slider {...props} /> : <Select { ...props} /> ;

const Form = () => {
    return (
        <div className="main-form">
            {
                formData.map( ( entry ) => {
                    return (
                        <Fragment key = { entry.id }>
                            <label htmlFor={ entry.id } className='form-label'>{ entry.label }</label>
                            <InputComponent 
                            data = {  entry }
                            options = { entry.options }
                            value = { entry.value }
                            className= 'form-input'
                            onChange = {
                                (...props) => {
                                    console.log(props);
                                }
                            }

                            />
                          
                        </Fragment>
                    )
                } )
            }
        </div>
    )
}

export default Form;