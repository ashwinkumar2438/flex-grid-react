import { fieldStandardise } from '../helpers/utils';


const commonFn = ( dimension ) => ( [
    {
        id:'height',
        type:'slider',
        label: 'height',
        value: dimension,   
        props:{
            maximum: 100,
            unit: '%'
        },
    },
    {
        id:'width',
        type:'slider',
        label: 'width',
        value: dimension,   
        props:{
            maximum: 100,
            unit: '%'
        },
    },

] )


const flex = [
    ...commonFn( 20 ) ,
    {
        id:'flexBasis',
        type:'slider',
        label: 'flex-basis',
        value: 20,   
        props:{
            maximum: 100,
            unit: '%'
        },
    },
    {
        id:'flexGrow',
        type:'select',
        label: 'flex-grow',
        value:'1',   
        props:{
            options: ['0', '1', '2', '3' ]
        },
    },
    {
        id:'flexShrink',
        type:'select',
        label: 'flex-shrink',
        value:'1',   
        props:{
            options: ['0', '1', '2', '3' ]
        },
    },

]

const grid = [
    ...commonFn( 90 ) ,
    {
        id:'gridColumnStart',
        type:'select',
        label: 'grid-column-start',
        value:'auto',   
        props:{
            options: [ 'auto', '-1', '-2', '-3', '1' , '2' , '3', '4', '5' ]
        },
    },
    {
        id:'gridColumnEnd',
        type:'select',
        label: 'grid-column-end',
        value:'auto',   
        props:{
            options: [ 'auto', '-1', '-2', '-3', '1' , '2' , '3', '4', '5' ]
        },
    },
    {
        id:'justifySelf',
        type:'select',
        label: 'justify-self',
        value:'center',   
        props:{
            options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly', 'stretch' ]
        },
    },
    {
        id:'alignSelf',
        type:'select',
        label: 'align-self',
        value:'center',   
        props:{
            options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly', 'stretch' ]
        },
    },
]

const childDefaultForm = {
    flex: fieldStandardise( flex ),
    grid: fieldStandardise( grid )
}


export default childDefaultForm;