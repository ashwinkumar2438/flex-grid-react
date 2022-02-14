import { Fragment, useState, useCallback } from 'react';
import Select from 'react-select';
import Slider from './Slider';

//style imports:
import '../scss/components/Form.scss';

const displayOptions = [
    { label: 'flex', value: 'flex' },
    { label: 'grid', value: 'grid' }
]

const InputComponent = ( { type, ...props } ) => type ==='slider' ? <Slider {...props} /> : <Select { ...props} /> ;

const Form = ( {  
    displayType ,
    setDisplayType,
    parentForm,
    setParentForm,
    childrenForm = [],
    setChildrenForm,
    setChildCount }
    ) => {

      
        const [ currentChild, setCurrentChild ] = useState( { label: 1, value: 0 } );

        const childOptions =  childrenForm.map( ( _, index ) => ( { label: index + 1, value: index } ) );


        const updateParent = useCallback( ( value ) => {
            setParentForm( value.id, value );
        } , [ setParentForm ])

        const updateChild = useCallback( ( value ) => {
            setChildrenForm([ currentChild.value ], value.id, value );
        }, [ currentChild.value , setChildrenForm ] )

        const updateChildCount = useCallback( ( { value } ) => {
            setChildCount( value )
        }, [ setChildCount ])

        return (
            <div className="main-form">
                <h2 className="heading">Display</h2>
                <div className="parent-form">
                    <label htmlFor="display-type" className="form-label"> Display Type</label>
                    <Select 
                        options = { displayOptions } 
                        value = { displayOptions.find( ( { value } ) => displayType === value  ) }
                        onChange = {
                            ( { value } ) => {
                                setDisplayType( value )
                            }
                        } 
                    />
                </div>
                <h3 className="heading">Parent Form</h3>
                <div className="parent-form">
                   
                    {
                        parentForm.map( ( content ) => {
                            return (
                                <Fragment key = { content.id }>
                                    <label htmlFor={ content.id } className='form-label'>{ content.label }</label>
                                    <InputComponent 
                                    { ...content.props }
                                    type = { content.type  }
                                    value = { content.value }
                                    className= 'form-input'
                                    onChange = { updateParent }
                                    />
                                
                                </Fragment>
                            )
                        } )
                    }
                </div>
                <h3 className="heading">Children Form</h3>
                <div className="child-form common-form">
                    <label htmlFor="child-count"></label>
                    <Slider 
                        maximum={ 20 } 
                        unit= "" 
                        value={ { value: childrenForm.length } }
                        onChange= { updateChildCount } />

                    <label htmlFor="select-child" className="form-label"></label>
                    <Select id="select-child" value= { currentChild } options= { childOptions } onChange={
                        setCurrentChild
                    } />            
                </div>
                
                <h4 className="heading">Child : { currentChild.label }</h4>
                <div className="child-form">
                   
                    {
                         childrenForm[ currentChild.value ]?.map( ( content ) => {
                            return (
                                <Fragment key = { content.id }>
                                    <label htmlFor={ content.id } className='form-label'>{ content.label }</label>
                                    <InputComponent 
                                    { ...content.props }
                                    type = { content.type  }
                                    value = { content.value }
                                    className= 'form-input'
                                    onChange = { updateChild }
                                    />
                                
                                </Fragment>
                            )
                        } )
                    }
                </div>
                
            </div>
        )
}

export default Form;