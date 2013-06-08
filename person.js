/*
 * clog is a shortcut for console.log()
 */
function clog(s){
    return console.log(s);
}

function Person(){};
Person.prototype.properties = {
    firstname: '',
    lastname: '',
    midname: '',
    email: '',
    age: ''
};
    
Person.prototype.set = function(property, value){
    if(value === undefined){
        return false;
    }
    if(this.properties[property] !== undefined){
        this.properties[property] = value;
        return true;
    }
    return false;
};
    
Person.prototype.get = function(property){
    if(this.properties[property] !== undefined){
        return this.properties[property] ;
    }
    return false;
};


Male.prototype = new Person();
Male.prototype.constructor = Male;

Female.prototype = new Person();
Female.prototype.constructor = Female;

function Male(){
    this.properties.gender = 'male';
}
function Female(){
    this.properties.gender = 'female';
}

var brad = new Male();
var jollie = new Female();
clog(brad.set('age', 35));
clog(brad.get('gender'));
clog(brad.get('age'));
clog(jollie.get('gender'));

