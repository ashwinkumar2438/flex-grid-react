const data = [
    {
        id:'display',
        label: 'display',
        options: [ 'flex', 'grid' ],
        value:'flex'
    },
    {
        id:'width',
        label: 'width',
        value: 100,
        type:'slider'
    }
]

for( let entry of data){
    if( entry.options ) {
        entry.options = entry.options.map( ( value ) => ( { value, label: value } ));
        entry.value = entry.options.find( option => option.value === entry.value );
    }
}


export default data;