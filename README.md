# ⚔️ QuestForge API

A creative Node.js API that generates dynamic characters, weapons, and fantasy worlds inspired by anime, manga, games, and storytelling.

> Built as part of a hackathon challenge to explore backend development with Node.js and Express.

---

## ✨ Features

- 🎭 Random Character Generator  
- ⚔️ Weapon Generator  
- 🧬 Full Character Builder (character + weapon combined)  
- 🌍 Fantasy World Generator  

---

## 🧠 Concept

QuestForge is designed as a **creative engine** for generating fantasy content.

Instead of a basic CRUD API, this project focuses on:
- randomness
- procedural generation
- game-inspired logic

It simulates the kind of systems used in:
- RPG games  
- world-building tools  
- storytelling engines  

---

## 🚀 Endpoints

### 🎭 Generate Character
GET /generate/character

### ⚔️ Generate Weapon
GET /generate/weapon

### 🧬 Generate Full Character
GET /generate/full-character

### 🌍 Generate World
GET /generate/world


---

## 📦 Example Response

```json
{
  "character": {
    "name": "Rin",
    "role": "villain",
    "power": "ice magic",
    "element": "storm"
  },
  "weapon": {
    "name": "Storm Breaker",
    "type": "scythe",
    "element": "ice",
    "effect": "burns everything in its path",
    "rarity": "rare"
  }
}

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- JavaScript

---

## ▶️ How to Run Locally

```bash
npm install
node index.js

Then open:
http://localhost:3000

---


💡 Future Improvements
🎯 Quest Generator
🎮 Rarity system (weighted probabilities)
🧾 Swagger / OpenAPI documentation
🌐 Deployment (Render / Vercel)
🎨 Custom user inputs (via query params)

---


👩‍💻 Author
Simona Chiapperino

