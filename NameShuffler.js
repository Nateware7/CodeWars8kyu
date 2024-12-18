// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


//My Solutions


const nameShuffler = str => str.split(' ').reverse().join(' ');


function nameSuffle(str){
    return str.split(' ').reverse().join(' ');
}

function nameSuffle(str){
    var name = str.split(' ');
    return name[1] + ' ' + name[0];
}