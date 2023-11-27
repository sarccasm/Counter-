const express = require('express');
const readline = require('readline');

const app = express();
const port = 3000;

app.use(express.static('public')); // Assuming your HTML file is in a 'public' directory

app.post('/getCounterpicks', express.json(), (req, res) => {
  const heroName = req.body.heroName;
  const counterpick = name_hero_dota2(heroName);

  if (counterpick.length > 0) {
    res.json({ message: `Контерпіки для ${heroName}:`, counterpicks: counterpick });
  } else {
    res.json({ message: `Контерпіки для ${heroName} нема.` });
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Server is running. Press Enter to stop.', () => {
  rl.close();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

function name_hero_dota2(heroName) {
  const counterpicksDatabase = {
    "Anti-Mage": ["Bloodseeker", "Phantom Assassin", "Nyx Assassin"],
        "Abaddon": ["Lion", "Necrophos", "Enigma"],
        "Alchemist": ["Ancient Apparition", "Timbersaw", "Shadow Demon"],
        "Ancient Apparition": ["Huskar", "Alchemist", "Morphling"],
        "Arc Warden": ["Phantom Lancer", "Ember Spirit", "Tinker"],
        "Axe": ["Timbersaw", "Enchantress", "Phantom Lancer"],
        "Bane": ["Abaddon", "Omniknight", "Legion Commander"],
        "Batrider": ["Oracle", "Rubick", "Juggernaut"],
        "Beastmaster": ["Lifestealer", "Weaver", "Morphling"],
        "Bloodseeker": ["Anti-Mage", "Phantom Lancer", "Nyx Assassin"],
        "Bounty Hunter": ["Slardar", "Zeus", "Riki"],
        "Brewmaster": ["Silencer", "Outworld Destroyer", "Shadow Demon"],
        "Bristleback": ["Timbersaw", "Viper", "Necrophos"],
        "Broodmother": ["Earthshaker", "Axe", "Legion Commander"],
        "Centaur Warrunner": ["Timbersaw", "Viper", "Naga Siren"],
        "Chaos Knight": ["Keeper of the Light", "Ember Spirit", "Medusa"],
        "Chen": ["Enchantress", "Lion", "Lycan"],
        "Clinkz": ["Bristleback", "Phantom Lancer", "Windranger"],
        "Clockwerk": ["Pugna", "Tinker", "Shadow Demon"],
        "Crystal Maiden": ["Lina", "Zeus", "Invoker"],
        "Dark Willow": ["Abaddon", "Omniknight", "Legion Commander"],
        "Dazzle": ["Necrophos", "Lifestealer", "Witch Doctor"],
        "Death Prophet": ["Silencer", "Invoker", "Pugna"],
        "Disruptor": ["Oracle", "Nyx Assassin", "Juggernaut"],
        "Doom": ["Outworld Destroyer", "Anti-Mage", "Phantom Lancer"],
        "Dragon Knight": ["Viper", "Timbersaw", "Invoker"],
        "Drow Ranger": ["Axe", "Slark", "Phantom Assassin"],
        "Earthshaker": ["Meepo", "Morphling", "Naga Siren"],
        "Earth Spirit": ["Silencer", "Oracle", "Rubick"],
        "Elder Titan": ["Lifestealer", "Phantom Lancer", "Chaos Knight"],
        "Ember Spirit": ["Silencer", "Outworld Destroyer", "Timbersaw"],
        "Enchantress": ["Nyx Assassin", "Lion", "Slark"],
        "Enigma": ["Rubick", "Naga Siren", "Keeper of the Light"],
        "Faceless Void": ["Outworld Destroyer", "Disruptor", "Shadow Demon"],
        "Gyrocopter": ["Phantom Lancer", "Anti-Mage", "Terrorblade"],
        "Huskar": ["Ancient Apparition", "Timbersaw", "Oracle"],
        "Io": ["Bane", "Doom", "Silencer"],
        "Jakiro": ["Rubick", "Nyx Assassin", "Juggernaut"],
        "Juggernaut": ["Bane", "Faceless Void", "Pugna"],
        "Kunkka": ["Phantom Lancer", "Lifestealer", "Anti-Mage"],
        "Keeper of the Light": ["Night Stalker", "Huskar", "Clockwerk"],
        "Invoker": ["Silencer", "Anti-Mage", "Nyxx Assassin"],
        "Legion Commander": ["Axe", "Timbersaw", "Bristleback"],
        "Lina": ["Anti-Mage", "Pugna", "Huskar"],
        "Lich": ["Anti-Mage", "Pugna", "Huskar"],
        "Lifestealer": ["Ancient Apparition", "Enchantress", "Timbersaw"],
        "Lion": ["Nyx Assassin", "Abaddon", "Juggernaut"],
        "Lone Druid": ["Invoker", "Bane", "Pugna"],
        "Luna": ["Phantom Assassin", "Anti-Mage", "Nyx Assassin"],
        "Magnus": ["Disruptor", "Silencer", "Shadow Demon"],
        "Medusa": ["Anti-Mage", "Phantom Lancer", "Lion"],
        "Meepo": ["Earthshaker", "Sven", "Ember Spirit"],
        "Mirana": ["Nyx Assassin", "Pugna", "Huskar"],
        "Monkey King": ["Earthshaker", "Timbersaw", "Lifestealer"],
        "Marci": ["Arc-Warden", "Anti-Mage", "Shadow Demon"],
        "Morphling": ["Ancient Apparition", "Lion", "Shadow Shaman"],
        "Muerta": ["Necrophos", "Troll Warlord", "Omniknigh"],
        "Naga Siren": ["Ember Spirit", "Keeper of the Light", "Disruptor"],
        "Nature's Prophet": ["Clockwerk", "Spirit Breaker", "Beastmaster"],
        "Necrophos": ["Anti-Mage", "Oracle", "Pugna"],
        "Night Stalker": ["Bane", "Disruptor", "Outworld Devourer"],
        "Nyx Assassin": ["Zeus", "Keeper of the Light", "Lion"],
        "Ogre Magi": ["Silencer", "Shadow Demon", "Disruptor"],
        "Omniknight": ["Anti-Mage", "Ancient Apparition", "Enchantress"],
        "Oracle": ["Doom", "Silencer", "Shadow Demon"],
        "Outworld Devourer": ["Pugna", "Anti-Mage", "Invoker"],
        "Pudge": ["Viper", "Outworld Devourer", "Lifestealer"],
        "Phantom Assassin": ["Bloodseeker", "Axe", "Monkey King"],
        "Phantom Lancer": ["Earthshaker", "Ember Spirit", "Sven"],
        "Phoenix": ["Silencer", "Ancient Apparition", "Invoker"],
        "Pugna": ["Anti-Mage", "Nyx Assassin", "Huskar"],
        "Queen of Pain": ["Pugna", "Silencer", "Death Prophet"],
        "Riki": ["Bounty Hunter", "Slardar", "Zeus"],
        "Rubick": ["Silencer", "Outworld Devourer", "Invoker"],
        "Razor": ["Anti-Mage", "Phantom Lancer", "Spectre"],
        "Sand King": ["Disruptor", "Oracle", "Keeper of the Light"],
        "Shadow Fiend": ["Outworld Devourer", "Pugna", "Invoker"],
        "Shadow Demon": ["Omniknight", "Abaddon", "Juggernaut"],
        "Silencer": ["Anti-Mage", "Invoker", "Legion Commander"],
        "Skywrath Mage": ["Pugna", "Huskar", "Anti-Mage"],
        "Slardar": ["Ember Spirit", "Terrorblade", "Phantom Lancer"],
        "Slark": ["Bloodseeker", "Bristleback", "Axe"],
        "Sniper": ["Spirit Breaker", "Clockwerk", "Storm Spirit"],
        "Spectre": ["Ancient Apparition", "Venomancer", "Necrophos"],
        "Spirit Breaker": ["Ember Spirit", "Dark Seer", "Nyx Assassin"],
        "Storm Spirit": ["Silencer", "Pugna", "Earth Spirit"],
        "Sven": ["Enchantress", "Timbersaw", "Phantom Lancer"],
        "Templar Assassin": ["Viper", "Venomancer", "Outworld Devourer"],
        "Terrorblade": ["Axe", "Timbersaw", "Legion Commander"],
        "Tidehunter": ["Lifestealer", "Ursa", "Slark"],
        "Timbersaw": ["Necrophos", "Outworld Devourer", "Lion"],
        "Tinker": ["Zeus", "Anti-Mage", "Nyx Assassin"],
        "Tiny": ["Lifestealer", "Troll Warlord", "Templar Assassin"],
        "Treant Protector": ["Enchantress", "Venomancer", "Nature's Prophet"],
        "Troll Warlord": ["Sniper", "Shadow Fiend", "Invoker"],
        "Techies": ["Zeus", "Nyx Assassin", "Clockwerk"],
        "Tusk": ["Viper", "Oracle", "Bane"],
        "Underlord": ["Visage", "Wraith King", "Lone Druid"],
        "Ursa": ["Bane", "Enchantress", "Razor"],
        "Undying": ["Anti-Mage", "Oracle", "Outworld Devourer"],
        "Vengeful Spirit": ["Pugna", "Shadow Demon", "Lion"],   
        "Viper": ["Huskar", "Anti-Mage", "Invoker"],
        "Venomancer": ["Rubick", "Pugna", "Omniknight"],
        "Visage": ["Earthshaker", "Lina", "Dazzle"],
        "Void Spirit": ["Bane", "Doom", "Puck"], 
        "Warlock": ["Silencer", "Rubick", "Pugna"],
        "Windranger": ["Pugna", "Bristleback", "Huskar"],
        "Winter Wyvern": ["Phantom Lancer", "Lifestealer", "Chen"],
        "Witch Doctor": ["Oracle", "Juggernaut", "Rubick"],
        "Wraith King": ["Anti-Mage", "Omniknight", "Timbersaw"],
        "Zeus" : ["Anti-Mage", "Pugna", "Huskar"]
  };

  return counterpicksDatabase[heroName] || [];
}
