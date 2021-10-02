//custom imports:
import useDrag from '../hooks/useDrag';
import { getStyles } from '../helpers/utils';
//style imports:
import '../scss/components/Container.scss';
const Container = ({ 
    appRef,
    displayType = 'flex',
    parentForm = [],
    childrenForm = [],
}) => {

    const [ containerStyle , observe ] = useDrag();
    return (
        <div className="main-container" style = { containerStyle }>
            <div className="dragger" {...observe( appRef ) }></div>
            <div className="parent-box" style = { { display: displayType, ...getStyles( parentForm ) }}>
                {
                    childrenForm.map( ( form, i ) => {
                        return ( 
                            <div 
                                className={ `child-box child-${ i + 1 }` } 
                                key = { i }
                                style = { getStyles( form )}
                                >
                                { i + 1 }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Container;