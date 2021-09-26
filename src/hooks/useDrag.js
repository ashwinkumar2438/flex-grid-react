import { useState, useRef, useCallback } from "react";


const screenTouchEvents = [ 'mousedown', 'touchstart' ];


const useDrag = () => {

    const [width, setWidth ] = useState( 50 );
    const parentRef = useRef();
    const childRef = useRef();
    const dragData = useRef( {
        active: false 
    } );

    const userActivity = useCallback( ( e ) => {
        e.preventDefault();
        const eventType = e.type ;
        const userActive = screenTouchEvents.includes( eventType );
        dragData.current.active = userActive ;
    } , [])

    const drag = useCallback ( ( e ) => {
        if( !dragData.current.active || !parentRef.current.current )return;
        const eventType = e.type;
        const absX = ( eventType.includes("touch")
                        ? e.touches[0]
                        ? e.touches[0].clientX
                        : e.changedTouches?.length
                        ? e.changedTouches[e.changedTouches.length - 1].clientX
                        : null 
                        : e.clientX
                    );
        const { left, right } = parentRef.current.current.getBoundingClientRect();

        let width = ( right - absX ) / (right - left);

        width = width < 0.1 ? 0.1: width > 0.9 ? 0.9 : width;

        setWidth( width * 100 );

    } , []);

    const toggleRegister = useCallback( ( node, register = true ) => {
        if( !( node instanceof HTMLElement ) ) return;
        const method = register ? 'addEventListener' : 'removeEventListener';

        document[ method ]('mousemove', drag );
        node[ method ]('mousedown', userActivity );
        document[ method ]('mouseup', userActivity );
    }, [ drag, userActivity ])



    const refCallback = useCallback( ( node ) => {
        if( !node || ( childRef.current === node ) ) return ;

        childRef.current &&  toggleRegister( childRef.current, false )
        childRef.current = node;
        toggleRegister( node );
    },[ toggleRegister ])

    const draggable = ( passRef ) => {

        parentRef.current = passRef;

        return {
            ref: refCallback
        }
    }


    return [ width, draggable ];


}

export default useDrag;