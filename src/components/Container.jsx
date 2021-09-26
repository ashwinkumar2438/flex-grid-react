//custom imports:
import useDrag from '../hooks/useDrag';
//style imports:
import '../scss/components/Container.scss';
const Container = ({ appRef, count = 3 }) => {

    const [ width, observe ] = useDrag();
    return (
        <div className="main-container" style = { { flexBasis: `${ width }%`} }>
            <div className="dragger" {...observe( appRef ) }></div>
            <div className="parent-box">
                {
                    [ ...Array( count )].map( ( _, i ) => {
                        return ( 
                            <div className={ `child-box child-${ i + 1 }` } key = { i }>
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