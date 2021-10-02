import { fieldStandardise } from '../helpers/utils';

const flex = [
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

]

const grid = [
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
]

const childDefaultForm = {
    flex: fieldStandardise( flex ),
    grid: fieldStandardise( grid )
}


export default childDefaultForm;