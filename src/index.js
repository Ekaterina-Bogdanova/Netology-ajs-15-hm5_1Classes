class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;   
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;    
  }

  set name(value) {
    if (typeof(value) === 'string' && value.length >= 2 && value.length <= 10) {
      this._name = value;       
    } else {
    throw new Error('Некорректное значение');
    }
  }

  get name() {
    return this._name;
  }

  set type(value) {
    if (value === 'Bowerman' ||
        value === 'Swordsman' ||
        value === 'Magician' || 
        value === 'Daemon' || 
        value === 'Undead' || 
        value === 'Zombie') {
          this._type = value;                     
    } else {
    throw new Error('Некорректное значение');
    }
  }

  get type() {
        return this._type;
  }
}

class Bowerman extends Character {
  constructor(name, type = 'Bowerman', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
};
class Swordsman extends Character {
  constructor(name, type = 'Swordsman', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
};
class Magician extends Character {
  constructor(name, type = 'Magician', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
};
class Daemon extends Character {
  constructor(name, type = 'Daemon', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
};
class Undead extends Character {
  constructor(name, type = 'Undead', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
};
class Zombie extends Character {
  constructor(name, type = 'Zombie', health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
};
