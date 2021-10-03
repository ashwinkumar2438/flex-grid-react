import { useState, useRef, useEffect, useCallback } from "react";
import { deepFormCopy, createChildArray  } from "../helpers/utils";
import childDefaultForm from "../data/child";


const useChildForm = ( displayType = 'flex' ) => {


    const previousData = useRef( null );
    const displayRef = useRef( displayType );

    const [ childrenForm, setChildrenForm ] = useState( [] );
    const [ childCount, setChildCount ] = useState( 5 );

    useEffect( () => {
        if( displayRef.current === displayType )return;

        const currentData = childrenForm ;

        if( previousData.current ) setChildrenForm ( previousData.current );
        else setChildrenForm( createChildArray( childCount, childDefaultForm[ displayType ] ) );

        //update Refs:
        displayRef.current = displayType;
        previousData.current = currentData.length ? currentData : null;

    }, [ displayType, childCount, childrenForm ]);

    useEffect( () => {

        if( childCount === childrenForm.length ) return;

        if( childCount < childrenForm.length ) setChildrenForm( forms => forms.slice( 0, childCount ) );

        else {
            const newForms = [...Array( childCount - childrenForm.length )].map( () => ( deepFormCopy( childDefaultForm[ displayRef.current ] ) ))
            setChildrenForm( forms => ( [ ...forms, ...newForms ] ) );
        }


    }, [ childCount, childrenForm ]);


    const updateChildren = useCallback( ( childIndices = [], fieldId, value ) => {
           setChildrenForm( forms => forms.map( ( form, index ) => {
                    if( !childIndices.includes( index ) ) return form;

                    return form.map( field => field.id === fieldId? {...field, value }: field );
           } ) ); 
    }, [ setChildrenForm ] )


    return [ childrenForm, updateChildren, setChildCount ];

}

export default useChildForm ;