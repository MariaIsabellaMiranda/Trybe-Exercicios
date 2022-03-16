const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
const danoWarrior = () => Math.floor(Math.random() * ((dragon.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;
const turnoMago = () => Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence;
const danoMago = () => {
  const mago = {
    dano: turnoMago(),
    mana: 15
  }
  if (mago.mana < 15) {
    mago.dano = "Não possui mana suficiente"
  }
  return mago
}
