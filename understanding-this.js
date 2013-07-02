function person(argName){
 var name = argName || 'chetan';
 this.surname = 'sharma';
 var counter = 0;
 this.countr = counter;
 
 return ('Name = ' + name + ' ' + surname + ' counter is ' + (this.counter++) + ' countr is ' + (countr++)); 

}

console.log(person('nannu'));
console.log(person());
