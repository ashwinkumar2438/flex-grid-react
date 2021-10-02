import { fieldStandardise } from '../helpers/utils';

const flex = [
    {
        id:'flexDirection',
        type:'select',
        label: 'flex-direction',
        value:'row',   
        props:{
            options: ['row', 'column', 'row-reverse', ]
        },
    },
    {
        id:'flexWrap',
        type:'select',
        label: 'flex-wrap',
        value:'wrap',   
        props:{
            options: ['wrap', 'nowrap', 'wrap-reverse', ]
        },
    },

]

const grid = [
    {
        id:'gridTemplateColumns',
        type:'select',
        label: 'grid-template-columns',
        value:'repeat( 3, 1fr )',   
        props:{
            options: ['repeat( 3, 1fr )', 'auto 100px', 'repeat( autofill, 100px )' ]
        },
    },
    {
        id:'gridTemplateRows',
        type:'select',
        label: 'grid-template-rows',
        value:'repeat( 3, 1fr )',   
        props:{
            options: ['repeat( 3, 1fr )', 'auto 100px', 'repeat( autofill, 100px )' ]
        },
    },
]

const parentDefaultForm = {
    flex: fieldStandardise( flex ),
    grid: fieldStandardise( grid )
}



export default parentDefaultForm;