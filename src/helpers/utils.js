/**
 * 
 * @param { Array of fields } form 
 * @returns @param form
 * select field options are converted to { value, label, id }
 * each field value transformed to { value, label, id }
 */
const fieldStandardise = ( form ) => {
    for( let content of form ){
        if( content.type === 'select' ) {
            content.props.options = content.props.options.map( ( value ) => ( { value, label: value, id: content.id } ));
            content.value = content.props.options.find( option => option.value === content.value );
        }
        if( content.type === 'slider' ){
            content.value = { value: content.value, label: content.value, id: content.id }
        }
    }

    return form;
}

/**
 * creates styles object for jsx
 * @param { Array of fields } form 
 * @returns { Object | { propery: value } } @name styles 
 */
const getStyles = ( form ) => {
    const styles = {} ;
    for ( let field of form ){
        styles[ field.id ] = field.value.value + ( field.props?.unit ??'' );
    }
    return styles;
}

/**
 * @param { Array of fields } form 
 * @returns a copy of form array and field objects. props are not copied.
 */
const deepFormCopy = ( form ) => ( form.map( fieldData => ( { ...fieldData } ) ) );


/**
 * 
 * @param { Number } count 
 * @param { Array of fields } form 
 * @returns { Array of form }
 */
const createChildArray = ( count, form ) => ( [ ...Array( count ) ].map( () => ( deepFormCopy( form ) ) ) ); 



export {
    fieldStandardise,
    deepFormCopy,
    createChildArray,
    getStyles
}