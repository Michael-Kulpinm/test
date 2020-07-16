var pet = function (spec){
    var it = {};

    it.get_name = function(){
        return spec.name;
    }
    it.sound = function(){
        return spec.make_sound || 'Auch';
    }
    return it;
}

var cat = function(spec) {
    spec.sound = spec.make_sound || 'meow';
    var it = pet(spec);
    return it;
}

var myPet = pet(name, "Henrry");
var myCat = cat();

console.log(myPet.get_name());
console.log(myPet.sound());
console.log(myCat.sound());