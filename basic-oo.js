/*
    privileged methods are declared with this.methodName=function(){...} and may invoked by code external to the object.
    public properties are declared with this.variableName and may be read/written from outside the object.
    public methods are defined by Classname.prototype.methodName = function(){...} and may be called from outside the object.
    prototype properties are defined by Classname.prototype.propertyName = someValue
    static properties are defined by Classname.propertyName = someValue
*/
var id = 1;
var Person = function(){
    this.init = function( name, age, gender){
        this.name    = name, //public
        this.age       =  age,
        this.gender  = gender;
        return this;//if we want to chain this we need to return reference to this object. 
    };
}; //named function
Person.prototype = {
//Let us add some properties to this *class*
    name: '', //public
    age: '',
    gender: '',
    toString: function(){
        console.log(this);
    },
    shout: function(){
        console.log(this);
    }
}

var Employee = function(n,a,g){
    var empId = '';
    var empPersonalInfo = function(){
        return ('Personal info of an employee!!!');
    };
    this.setEmpId =  function(val){
        empId = val;
    }
    this.giveEmpPersonalInfo =  function (){
        return empPersonalInfo();
    }
};

Employee.prototype = new Person();
//Employee.prototype.constructor = Employee;

var e = new Employee();
e.init('John', '30', 'male');
e.shout();





function Person() {
  var that = {};
      if(!(that instanceOf this) {
          that = new Person();
      }
      that.test = function() {
          
          
         ... 
          
      }
    
    
    retrun that;
    
}






/*
    You cause a class to inherit using ChildClassName.prototype = new ParentClass();.
    You need to remember to reset the constructor property for the class using ChildClassName.prototype.constructor=ChildClassName.
    You can call ancestor class methods which your child class has overridden using the Function.call() method.
    Javascript does not support protected methods.

var Student =  function(){}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype = {
    standard: '',
    toString: function(){
        console.log(this);
    },
    shout: function(){
        console.log(this);
    }
}
var p = new Person();
p.name = 'Smith',
p.age = 'xy',
p.gender = 'male';
var q = new Person().init('Neo', 'yx', 'mail'); //notice the typ0 ;-)
p.toString();
q.toString();
var s = new Student().init('Jill', '5', 'male', '5');
s.toString();
*/
/*
    private variables are declared with the 'var' keyword inside the object, and can only be accessed by private functions and privileged methods.
    private functions are declared inline inside the object's constructor (or alternatively may be defined via var functionName=function(){...}) and may only be called by privileged methods (including the object's constructor).
*/