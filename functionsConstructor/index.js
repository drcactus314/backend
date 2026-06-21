


function Hero (name, age, level){
    this.name = name,
    this.age = age,
    this.level = level
}

function Warrior(name, age, level, weapon) {
    Hero.call(this, name, age, level);
    this.wheapon = weapon;
}
function Healer(name, age, level, spell) {
    Hero.call(this, name, age, level);
    this.spell = spell;
}
    
const Hero1 = new Hero("Bjorn", 12, 2);

Hero.prototype.greed = function(){
    return 'i said i become developer'
}

Warrior.prototype.attack = function(){
    return 'i attack you as developer'
}

Healer.prototype.heal = function(){
    return 'I heal you asd programmer'
};

const hero1 = new Warrior('Arthur', 32, 4, 'sword');
const hero2 = new Healer('Merlin', 32, 4, 'fire');

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)

console.log(Hero1);
console.log(hero1.attack());
console.log(hero1.greed());
console.log(hero2.heal());