const express = require('express');
const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('QuestForge API is running ⚔️');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Random helper function
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Data
const names = ["Kael", "Airi", "Rin", "Luna", "Vex"];
const roles = ["hero", "villain", "antihero"];
const powers = ["shadow control", "lightning", "time distortion", "ice magic"];
const weapons = ["katana", "scythe", "magic staff", "dual blades"];
const elements = ["fire", "water", "storm", "void"];

// Generate character
app.get('/generate/character', (req, res) => {
  const character = {
    name: getRandomItem(names),
    role: getRandomItem(roles),
    power: getRandomItem(powers),
    weapon: getRandomItem(weapons),
    element: getRandomItem(elements)
  };

  res.json(character);
});

// Weapon data
const weaponNames = ["Moonblade", "Soul Reaver", "Storm Breaker", "Void Fang"];
const weaponTypes = ["katana", "scythe", "bow", "staff"];
const weaponElements = ["fire", "ice", "lightning", "shadow"];
const weaponEffects = [
  "freezes enemies",
  "burns everything in its path",
  "summons lightning strikes",
  "drains life energy"
];
const rarities = ["common", "rare", "epic", "legendary"];

// Generate weapon
app.get('/generate/weapon', (req, res) => {
  const weapon = {
    name: getRandomItem(weaponNames),
    type: getRandomItem(weaponTypes),
    element: getRandomItem(weaponElements),
    effect: getRandomItem(weaponEffects),
    rarity: getRandomItem(rarities)
  };

  res.json(weapon);
});

app.get('/generate/full-character', (req, res) => {
  const character = {
    name: getRandomItem(names),
    role: getRandomItem(roles),
    power: getRandomItem(powers),
    element: getRandomItem(elements)
  };

  const weapon = {
    name: getRandomItem(weaponNames),
    type: getRandomItem(weaponTypes),
    element: getRandomItem(weaponElements),
    effect: getRandomItem(weaponEffects),
    rarity: getRandomItem(rarities)
  };

  const fullCharacter = {
    character,
    weapon
  };

  res.json(fullCharacter);
});