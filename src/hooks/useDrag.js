import { useState, useRef, useCallback } from "react";


const screenTouchEvents = [ 'mousedown', 'touchstart' ];

const screenWidth = ( document.body?.clientWidth ?? window.screen.availWidth ) ;

const property = screenWidth > 500 ? 'flexBasis' : 'width' ;
const upperLimit = screenWidth > 500 ? 0.9 : 1 ;
const lowerLimit = 0.1 ;
const initialFlex = ( screenWidth > 1200 ? 70 :
                      screenWidth > 800 ? 50 :
                      screenWidth > 500 ? 30 :  100 );


const useDrag = () => {

    const [width, setWidth ] = useState( initialFlex );
    const parentRef = useRef();
    const childRef = useRef();
    const dragData = useRef( {
        active: false 
    } );

    const userActivity = useCallback( ( e ) => {
        const eventType = e.type ;
        const userActive = screenTouchEvents.includes( eventType );
        dragData.current.active = userActive ;
        userActive  &&  e.preventDefault();
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

        width = width < lowerLimit ? lowerLimit : width > upperLimit ? upperLimit : width;

        setWidth( width * 100 );

    } , []);

    const toggleRegister = useCallback( ( node, register = true ) => {
        if( !( node instanceof HTMLElement ) ) return;
        const method = register ? 'addEventListener' : 'removeEventListener';

        document[ method ]('mousemove', drag );
        node[ method ]('mousedown', userActivity );
        document[ method ]('mouseup', userActivity );

        document[ method ]('touchmove', drag );
        node[ method ]('touchstart', userActivity );
        document[ method ]('touchend', userActivity );
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


    return [ { [ property ] : `${ width }%` }, draggable ];


}

export default useDrag;