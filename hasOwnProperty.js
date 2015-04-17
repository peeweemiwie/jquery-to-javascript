//http://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript

var obj = {
    a: undefined,
    b: null,
    c: false
};

// a, b, c all found
for ( var prop in obj ) {
    console.log( "Object1: " + prop );
}

function Class(){
    this.a = undefined;
    this.b = null;
    this.c = false;
}

Class.prototype = {
    a: undefined,
    b: true,
    c: true,
    d: true,
    e: true
};

var obj2 = new Class();

// a, b, c, d, e found
for ( var prop in obj2 ) {
  console.log( "Object2: " + prop );
}

function hasOwnProperty(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}

if ( Object.prototype.hasOwnProperty ) {
    var hasOwnProperty = function(obj, prop) {
        return obj.hasOwnProperty(prop);
    }
}

// a, b, c found in modern browsers
// b, c found in Safari 2.0.1 and older
for ( var prop in obj2 ) {
    if ( hasOwnProperty(obj2, prop) ) {
      console.log( "Object2 w/ hasOwn: " + prop );
    }
}


///////////////////////////////

var obj = {
    a: undefined,
    b: null,
    c: false
};

for ( var prop in obj ) {
    console.log( "Object1: " + prop );
}
