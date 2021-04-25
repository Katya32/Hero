class Hero{
    constructor({name, race, damage, skill, health} = {}) {
        this.name = name;
        this.race = race;
        this.damage = damage;
        this.skill = skill;
        this.health = health;
    }

    
    fight(enemy) {
          if(friendlyRace.includes(enemy.race)) {
            console.log('You cannot fight, your races are friends')
        } else {
            console.log(`Warrior ${enemy.name} start fight with ${this.name}`)
        }
    }

    attack(invader) {
        console.log(`Warrior ${this.name} attack ${invader.name}\n Warrior ${this.name} caused ${this.damage} points of damage ${invader.name}\n ${invader.name} left ${invader.health - this.damage} health points`)
    }

    heal(addHaelthPoints) {
        console.log(`You health has add ${addHaelthPoints} points and at the moment is ${this.health + addHaelthPoints} points. You can use it only once time per fight`)
    }

    makeFriends(friend) {
          if(friendlyRace.includes(friend.race)) {
            console.log('Our races are friends!')
        } else {
            console.log('This is not a friend')
        }
    }         
}

const friendlyRace = ['human', 'elf', 'hobbit']

const heroInstance1 = new Hero({
    name: 'Haruka',
    race: 'human',
    damage: 10,
    skill: 50,
    health: 100,
});


const heroInstance2 = new Hero({
    name: 'Azog',
    race: 'ork',
    damage: 40,
    skill: 60,
    health: 70,
})


const heroInstance3 = new Hero({
    name: 'Elrond',
    race: 'elf',
    damage: 15,
    skill: 75,
    health: 90,
})


const heroInstance4 = new Hero({
    name: 'Durin',
    race: 'dwarf',
    damage: 25,
    skill: 80,
    health: 80,
})


const heroInstance5 = new Hero({
    name: 'Bilbo',
    race: 'hobbit',
    damage: 5,
    skill: 60,
    health: 100,
})


heroInstance1.fight(heroInstance2);
heroInstance1.fight(heroInstance3);
heroInstance1.fight(heroInstance4);
heroInstance1.fight(heroInstance5);

heroInstance1.attack(heroInstance2);
heroInstance1.attack(heroInstance3);
heroInstance1.attack(heroInstance4);
heroInstance1.attack(heroInstance5);

setTimeout(heroInstance1.heal(30), 10000);

heroInstance1.makeFriends(heroInstance2);
heroInstance1.makeFriends(heroInstance3);
heroInstance1.makeFriends(heroInstance4);
heroInstance1.makeFriends(heroInstance5); 
