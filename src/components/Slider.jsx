
import { useEffect, useRef, useCallback } from 'react';
import '../scss/components/Slider.scss';

const Slider = ( { value = 0 , unit = 'px', onChange, maximum = 500 } ) => {

    const slidebarRef = useRef()

    const seekChanged = useCallback( ( e ) => {
        const progress = e.target.getAttribute("progress");
        const seekedValue  = ( progress * maximum ) / 100
        onChange( seekedValue );
    } , [ onChange ])

    useEffect( () => {
        if( !slidebarRef.current )return;
        slidebarRef.current.addEventListener("seekchange", seekChanged );

        return () => {
            slidebarRef.current.removeEventListener("seekchange", seekChanged );
        }
    } ,[ seekChanged ]);

    return (
        <div className="slider-wrapper">
            <div className="current-value">
                <span>{ value + unit }</span>
            </div>
            <slide-bar progress= { ( value / maximum ) * 100  } ref= { slidebarRef }></slide-bar>
        </div>
    )
}

export default Slider;