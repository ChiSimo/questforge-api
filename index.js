const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


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
const worldNames = ["Neon Abyss", "Crimson Valley", "Moonlit Ocean", "Forgotten Temple"];
const worldThemes = ["cyberpunk", "fantasy", "ancient", "dark"];
const dangerLevels = ["low", "medium", "high", "extreme"];
const specialRules = [
  "time flows differently",
  "magic is unstable",
  "only the strong survive",
  "memories become real"
];

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

app.get('/generate/world', (req, res) => {
  const world = {
    name: getRandomItem(worldNames),
    theme: getRandomItem(worldThemes),
    danger: getRandomItem(dangerLevels),
    rule: getRandomItem(specialRules)
  };

  res.json(world);
});

app.get('/generate/quest', (req, res) => {
  const quest = {
    title: getRandomItem(questTitles),
    objective: getRandomItem(questObjectives),
    difficulty: getRandomItem(questDifficulties),
    reward: getRandomItem(questRewards)
  };

  res.json(quest);
});

app.get('/generate/adventure', (req, res) => {
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

  const world = {
    name: getRandomItem(worldNames),
    theme: getRandomItem(worldThemes),
    danger: getRandomItem(dangerLevels),
    rule: getRandomItem(specialRules)
  };

  const quest = {
    title: getRandomItem(questTitles),
    objective: getRandomItem(questObjectives),
    difficulty: getRandomItem(questDifficulties),
    reward: getRandomItem(questRewards)
  };

  const adventure = {
    character,
    weapon,
    world,
    quest
  };

  res.json(adventure);
});

const questTitles = [
  "The Lost Relic",
  "Shadow of the Fallen King",
  "Echoes Beneath the Sea",
  "The Final Eclipse"
];

const questObjectives = [
  "recover the ancient artifact",
  "defeat the corrupted guardian",
  "rescue the missing healer",
  "seal the unstable portal"
];

const questDifficulties = [
  "easy",
  "medium",
  "hard",
  "legendary"
];

const questRewards = [
  "100 gold",
  "enchanted weapon",
  "rare crystal",
  "legendary armor"
];