
import { useEffect, useRef, useCallback } from 'react';
import '../scss/components/Slider.scss';

const Slider = ( { value:seekValue = { value: 0, id: '' }, unit = '%', maximum = 100, onChange } ) => {

    const slidebarRef = useRef()

    const seekChanged = useCallback( ( e ) => {
        const progress = e.target.getAttribute("progress");
        const seekedValue  = Math.ceil( ( progress * maximum ) / 100 );

        const newValue = {
            value: seekedValue,
            id: seekValue.id
        }
        onChange?.( newValue );

    } , [ onChange, maximum, seekValue.id ]);

    useEffect( () => {
        if( !slidebarRef.current )return;
        const sliderBar = slidebarRef.current;

        sliderBar.addEventListener("seekchange", seekChanged );

        return () => {
            sliderBar.removeEventListener("seekchange", seekChanged );
        }
    } ,[ seekChanged ]);

    return (
        <div className="slider-wrapper">
            <div className="current-value">
                <span>{ seekValue.value + unit }</span>
            </div>
            <slide-bar progress= { ( seekValue.value / maximum ) * 100  } ref= { slidebarRef }></slide-bar>
        </div>
    )
}

export default Slider;