const getTypesFromArray = (array) => {

    let numbers = [];
    let strings = [];
    let objects = [];
    let others = [];
    
    array.forEach((el) => {
        switch(typeof(el)){
            case 'number':
                if(el != 0) numbers.push(el);
                else others.push(el);
            break;
            case 'string':
                strings.push(el);
            break;
            case 'object':
                if(el != null) objects.push(el);
                else others.push(el);
            break;
            default:
                others.push(el);
            break;
        }
    });
    
    console.log(numbers.sort((a, b) => a - b));
    console.log(strings.sort());
    console.log(objects.sort());
    console.log(others.sort());
    
    }

let array = [128.75, 
    24, 
    '2df', 
    0,
    {name: 'ant', age: 15}, 
    true, 
    0,
    10.4, 
    {api: true, test: false}, 
    '35g',
    null,
    false,
    undefined,
];

getTypesFromArray(array);