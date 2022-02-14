import { fieldStandardise, deepFormCopy } from '../helpers/utils';

const common = [
    {
        id:'height',
        type:'slider',
        label: 'height',
        value: 500,   
        props:{
            maximum: 1000,
            unit: 'px'
        },
    },
    {
        id:'columnGap',
        type:'slider',
        label: 'column-gap',
        value:'10',   
        props:{
            maximum: 100,
            unit: 'px'
        },
    }, 
    {
        id:'rowGap',
        type:'slider',
        label: 'row-gap',
        value:10,   
        props:{
            maximum: 100,
            unit:'px'
        },
    },

]


const flex = [
    ...deepFormCopy( common ),
    {
        id:'flexDirection',
        type:'select',
        label: 'flex-direction',
        value:'row',   
        props:{
            options: ['row', 'column', 'row-reverse', 'column-reverse' ]
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
    {
        id:'justifyContent',
        type:'select',
        label: 'justify-content',
        value:'center',   
        props:{
            options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly', 'stretch' ]
        },
    },
    {
        id:'alignItems',
        type:'select',
        label: 'align-items',
        value:'center',   
        props:{
            options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly', 'stretch' ]
        },
    },
    {
        id:'alignContent',
        type:'select',
        label: 'align-content',
        value:'stretch',   
        props:{
            options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly', 'stretch' ]
        },
    },

]

const grid = [
    ...deepFormCopy( common ),
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