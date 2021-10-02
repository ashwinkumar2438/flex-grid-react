import { useState, useRef, useEffect } from "react";
import { deepFormCopy } from "../helpers/utils";
import parentDefaultForm from "../data/parent";


const useParentForm = ( displayType = 'flex' ) => {


    const previousData = useRef( null );
    const displayRef = useRef();

    const [ parentForm, setParentForm ] = useState( [] );

    useEffect( () => {
        if( displayRef.current === displayType )return;

        const currentData = parentForm ;
        
        if( previousData.current ) setParentForm ( previousData.current );
        else setParentForm( deepFormCopy( parentDefaultForm[ displayType ] ) );

        //update Refs:
        displayRef.current = displayType;
        previousData.current = currentData.length ? currentData : null;

    }, [ displayType, parentForm ]);


    const updateParentForm = ( fieldId, value ) => {
           setParentForm( form => form.map( field => field.id === fieldId? {...field, value }: field ) ); 
    }


    return [ parentForm, updateParentForm ];

}

export default useParentForm ;