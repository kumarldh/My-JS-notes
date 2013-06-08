/*
 * clog is a shortcut for console.log()
 */
function clog(s){
    return console.log(s);
}

var Person = {
    properties: {
        firstname: '',
        lastname: '',
        midname: '',
        email: '',
        age: ''
    },
    set: function(property, value){
        if(value === undefined){
            return false;
        }
        if(this.properties[property] !== undefined){
            this.properties[property] = value;
            return true;
        }
        return false;
    },
    get: function(property){
        if(this.properties[property] !== undefined){
            return this.properties[property] ;
        }
        return false;
    }    
};
    
//var brad = new Person();//Err...Person doesn't have a constructor, this will throw error.  So following will also fail
//Male.prototype = new Person();
//But
Male.prototype = Person; //Person is an object after all
Male.prototype.constructor = Male;

Female.prototype = Person;
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