const jsonfile = require("./arkhamdb.com.json");
export const dataObjects = jsonfile.filter(o=> ['skill', 'asset', 'event'].includes(o.type_code)&& !o.duplicate_of && o.pack_code !='rcore'&& !o.restrictions && o.subtype_code!='basicweakness' && !o.bonded_to && o.subtype_code!='weakness'&& o.pack_code != 'fhvp').map(o=>({
    cardName: [o.subtype_name?`${o.real_name} - ${o.subtype_name}`: o.real_name],
    typeName: [o.type_name],
    class: [...new Set([o.faction_name, o.faction2_name, o.faction3_name])].filter(o=>typeof o !== 'undefined'),
    xp: [o.xp],
    traits: o.traits?.split(',')||[],
    slot: o.slot?.split(',')||[],
    cost: [o.cost || '-'],
    wild: [o.skill_wild || 0] ,
    willpower: [o.skill_willpower || 0],
    intellect: [o.skill_intellect || 0] ,
    combat: [o.skill_combat || 0] ,
    agility: [o.skill_agility || 0] 
}))

// export const dataObjects = [
//   {
//     cardName: [
//       "Roland's .38 Special",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daisy's Tote Bag",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Necronomicon - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Lam",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Heirloom of Hyperborea",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Memory - Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wendy's Amulet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Automatic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Physical Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beat Cop",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "First Aid",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Machete",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guard Dog",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Evidence!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dodge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dynamite Blast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vicious Blow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Extra Ammunition",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Police Badge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beat Cop",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Shotgun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Magnifying Glass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Book of Lore",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Research Librarian",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. Milan Christopher",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hyperawareness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Medical Texts",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind over Matter",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Working a Hunch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Barricade",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Deduction",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Magnifying Glass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Disc of Itzamna",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Encyclopedia",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Research",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Switchblade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Burglary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pickpocketing",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       ".41 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leo De Luca",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       6,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hard Knocks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Elusive",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Backstab",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sneak Attack",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Opportunist",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leo De Luca",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cat Burglar",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sure Gamble",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hot Streak",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forbidden Knowledge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Holy Rosary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrivelling",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrying",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Studies",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Initiate",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Drawn to the Flame",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ward of Protection",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blinding Light",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Fearless",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind Wipe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blinding Light",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Book of Shadows",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grotesque Statue",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leather Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scavenging",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Baseball Bat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rabbit's Foot",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stray Cat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dig Deep",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cunning Distraction",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Look what I found!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Survival Instinct",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Aquinnah",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Close Call",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Will to Survive",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Knife",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Flashlight",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Cache",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guts",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Perception",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Overpower",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Manual Dexterity",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Unexpected Courage",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bulletproof Vest",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Elder Sign Amulet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Roland's .38 Special",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daisy's Tote Bag",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Necronomicon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Lam",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Heirloom of Hyperborea",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Memory",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wendy's Amulet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Automatic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Physical Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beat Cop",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "First Aid",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Machete",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guard Dog",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Evidence!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dodge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dynamite Blast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vicious Blow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Extra Ammunition",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Police Badge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beat Cop",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Shotgun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Magnifying Glass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Book of Lore",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Research Librarian",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. Milan Christopher",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hyperawareness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Medical Texts",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind over Matter",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Working a Hunch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Barricade",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Deduction",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Magnifying Glass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Disc of Itzamna",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Encyclopedia",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Research",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Switchblade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Burglary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pickpocketing",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       ".41 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leo De Luca",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       6,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hard Knocks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Elusive",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Backstab",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sneak Attack",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Opportunist",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leo De Luca",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cat Burglar",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sure Gamble",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hot Streak",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forbidden Knowledge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Holy Rosary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrivelling",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrying",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Studies",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Initiate",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Drawn to the Flame",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ward of Protection",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blinding Light",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Fearless",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind Wipe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blinding Light",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Book of Shadows",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grotesque Statue",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leather Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scavenging",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Baseball Bat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rabbit's Foot",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stray Cat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dig Deep",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cunning Distraction",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Look what I found!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Survival Instinct",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Aquinnah",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Close Call",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Will to Survive",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Knife",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Flashlight",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Cache",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guts",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Perception",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Overpower",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Manual Dexterity",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Unexpected Courage",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bulletproof Vest",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Elder Sign Amulet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "First Aid",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I've had worse…\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Seeking Answers",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Old Book of Lore",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lockpicks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".41 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Seeking",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrying",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Aquinnah",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Eucatastrophe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Cache",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Charisma",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Relic Hunter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Zoey's Cross",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Search for the Truth",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jenny's Twin .45s",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       -2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Jim's Trumpet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Duke",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blackjack",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Taunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Teamwork",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Taunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Laboratory Assistant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Strange Solution",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shortcut",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Seeking Answers",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Liquid Courage",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Think on Your Feet",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Double or Nothing",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hired Muscle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Seeking",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ritual Candles",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clarity of Mind",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bind Monster",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fire Axe",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Peter Sylvestre",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bait and Switch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Peter Sylvestre",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Kukri",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Aid",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Brother Xavier",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I've got a plan!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pathfinder",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Contraband",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Adaptable",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Delve Too Deep",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Song of the Dead",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Oops!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fire Extinguisher",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Flare",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Smoking Pipe",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Painkillers",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bandolier",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stand Together",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Art Student",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deduction",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I'm outta here!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Switchblade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hypnotic Gaze",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Shrivelling",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Newspaper",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lure",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Relic Hunter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Charisma",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Prepared for the Worst",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Keen Eye",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Preposterous Sketches",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Higher Education",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lone Wolf",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Streetwise",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Defiance",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blood Pact",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rise to the Occasion",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrapper",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Cache",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"If it bleeds...\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Springfield M1903",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Inquiring Mind",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Expose Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quick Thinking",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky Dice",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Opportunist",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alyssa Graham",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Seeking",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Horse",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Survival Instinct",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Leadership",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I've had worse…\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Strange Solution",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Strange Solution",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Strange Solution",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Joey \"The Rat\" Vigil",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Ace in the Hole",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Moonlight Ritual",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Fearless",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jewel of Aureolus",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "A Chance Encounter",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stroke of Luck",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fine Clothes",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Moment of Respite",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vicious Blow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Monster Slayer",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lightning Gun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       6,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. William T. Maleson",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deciphered Reality",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Chicago Typewriter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Gold Pocket Watch",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrivelling",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ward of Protection",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Aquinnah",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Try and Try Again",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Red-Gloved Man",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Home Front",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       4,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sophie",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sophie - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Analytical Mind",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The King in Yellow - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Painted World",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Spirit-Speaker",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bury Them Deep",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Improvisation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".32 Colt",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "True Grit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Let me handle this!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ever Vigilant",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fieldwork",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Archaic Glyphs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "No Stone Unturned",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "In the Know",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stealth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sleight of Hand",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daring Maneuver",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lockpicks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alchemical Transmutation",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Uncage the Soul",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Astral Travel",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Spirit Athame",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lantern",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gravedigger's Shovel",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hiding Spot",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Resourceful",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Heroic Rescue",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Combat Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Anatomical Diagrams",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scientific Theory",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Knuckleduster",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Moxie",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "David Renfield",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grounded",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cherished Keepsake",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Plucky",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Say Your Prayers",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       4,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Desperate Search",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       4,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Reckless Assault",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       4,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Run For Your Life",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       4,
//     ],
//   },
//   {
//     cardName: [
//       "Trench Knife",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ambush",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Charles Ross, Esq.",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forewarned",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dario El-Amin",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sneak Attack",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Storm of Spirits",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Book of Shadows",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fight or Flight",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "A Test of Will",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Devil's Luck",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Calling in Favors",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"I'll see you in hell!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Automatic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Logical Reasoning",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archaic Glyphs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archaic Glyphs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cheap Shot",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pickpocketing",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Quantum Flux",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Recharge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Madame Labranche",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Snare Trap",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Inspiring Presence",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mano a Mano",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "First Aid",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eureka!",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Shortcut",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"Watch this!\"",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       ".41 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Torrent of Power",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrying",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Waylay",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "A Chance Encounter",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       -2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Emergency Cache",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Hunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stick to the Plan",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guidance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Insight",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Narrow Escape",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Suggestion",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "St. Hubert's Key",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ward of Protection",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Initiate",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Not without a fight!\"",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "True Survivor",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Eat lead!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Armor of Ardennes",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eidetic Memory",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "No Stone Unturned",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Charon's Obol",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lupara",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cheat Death",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Time Warp",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Seal of the Elder Sign",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Newspaper",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Infighting",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Key of Ys",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mitch Brown",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jake Williams",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Smuggled Goods",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Finn's Trusty .38",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Codex of Ages",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Until the End of Time",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Survival Knife",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Venturer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Trusted",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Reliable",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. Elli Horowitz",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancient Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tooth of Eztli",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Unearth the Ancients",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Treasure Hunter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Decorated Skull",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Eavesdrop",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"You handle this one!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mists of R'lyeh",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Chthonian Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Protective Incantation",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Prophecy",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Improvised Weapon",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dumb Luck",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Yaotl",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Last Chance",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       5,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Backpack",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Pact - Basic Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scene of the Crime",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Marksmanship",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Persuasion",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrewd Analysis",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky Cigarette Case",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fence",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Research",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Counterspell",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Perseverance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stunning Blow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Second Wind",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Take the Initiative",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Well Prepared",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Truth from Fiction",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "True Understanding",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quick Study",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hatchet Man",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "High Roller",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enraptured",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Recall the Future",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Try and Try Again",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cornered",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Intrepid",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Custom Ammunition",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Otherworldly Compass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Expose Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lola Santiago",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Olive McBride",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Defiance",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Premonition",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Live and Learn",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Take Heart",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Against All Odds",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Trench Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Ornate Bow",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "M1918 BAR",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancient Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancient Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Slip Away",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pay Day",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sacrifice",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Crystalline Elder Sign",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On Your Own",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Handcuffs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Blood Eclipse",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Feed the Mind",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Colt Vest Pocket",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Coup de Grâce",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Skeleton Key",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mists of R'lyeh",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Winging It",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Hunting Rifle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Thermos",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hemispheric Map",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Timeworn Brand",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Kerosene",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Flamethrower",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Body. Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vantage Point",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pnakotic Manuscripts",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Borrowed Time",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "All In",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shards of the Void",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Seal of the Seventh Sign",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Impromptu Barrier",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alter Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hypnotic Therapy",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Detective's Colt 1911s",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Unsolved Case - Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Family Inheritance",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lodge \"Debts\" - Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       10,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Twilight Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Insight",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I'm done runnin'!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mystifying Song",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Baron Samedi - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Interrogate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Delay the Inevitable",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Steadfast",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ace of Swords",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fingerprint Kit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Connect the Dots",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Curiosity",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Death • XIII",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Well Connected",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Money Talks",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cunning",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Moon • XVIII",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deny Existence",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eldritch Inspiration",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Prophesy",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Four of Cups",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Track Shoes",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Act of Desperation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Able Bodied",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Five of Pentacles",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ace of Rods",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Tower • XVI - Basic Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Something Worth Fighting For",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Crack the Case",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Intel Report",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sign Magick",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Banish",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Meat Cleaver",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Thompson",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       6,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scroll of Secrets",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tennessee Sour Mash",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enchanted Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand. Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grisly Totem",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Alice Luxley",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Well-Maintained",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mr. \"Rook\"",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hawk-Eye Folding Camera",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Henry Wan",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Swift Reflexes",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Wither",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sixth Sense",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Drawing Thin",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Belly of the Beast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Thompson",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       6,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".45 Thompson",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Scroll of Secrets",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scroll of Secrets",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tennessee Sour Mash",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tennessee Sour Mash",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Enchanted Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand. Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enchanted Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand. Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grisly Totem",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Grisly Totem",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Council's Coffer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Warning Shot",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Telescopic Sight",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Knowledge is Power",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Esoteric Atlas",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Investments",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Decoy",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "De Vermis Mysteriis",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guiding Spirit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fortune or Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mk 1 Grenades",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Agency Backup",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       7,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ghastly Revelation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Studious",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Small Favor",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Another Day, Another Dollar",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dayana Esperence",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deny Existence",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Trial by Fire",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bait and Switch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Anna Kaslow",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hallowed Mirror",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Soothing Melody",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"I've had worse…\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Lexicon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blood-Rite",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Glimpse the Unthinkable",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       3,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"You owe me one!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Double, Double",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wither",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sixth Sense",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lure",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Eucatastrophe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Becky",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Evidence",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bounty Contracts",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tony's .38 Long Colt",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gate Box",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Patrice's Violin",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Hungering Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Solemn Vow",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Segment of Onyx",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pendant of the Queen",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Astounding Revelation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Crystallizer of Dreams",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Easy Mark",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Stargazing",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Stars Are Right",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Open Gate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Miss Doyle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hope",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Zeal",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Augur",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Fortuitous Discovery",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       -2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Kleptomania - Basic Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "First Watch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daring",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dream Diary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Essence of the Dream",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Followed",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Momentum",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scroll of Prophecies",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Read the Signs",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jessica Hyde",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tetsuo Mori",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Fool me once...\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Self-Sacrifice",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Otherworld Codex",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dream-Enhancing Serum",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Let God sort them out...\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Swift Reload",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Gregory Gry",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Healing Words",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ethereal Form",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Scrounge for Supplies",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Brute Force",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Versatile",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".35 Winchester",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Safeguard",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Practice Makes Perfect",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Extensive Research",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       10,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Three Aces",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Burglary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Spectral Razor",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Word of Command",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Moonstone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sharp Vision",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucid Dreaming",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Heroic Rescue",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Leadership",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dream Diary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dream Diary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dream Diary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Haste",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daredevil",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Empower Self",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Empower Self",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Empower Self",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Twila Katherine Price",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "A Glimmer of Hope",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Expeditious Retreat",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Empty Vessel",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wish Eater",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Surprising Find",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Book of Lore",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Garrote Wire",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Delilah O'Rourke",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Summoned Hound",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally. Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nothing Left to Lose",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Black Cat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Spiritual Resolve",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Abigail Foreman",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Eye of Truth",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       4,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Joey \"The Rat\" Vigil",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sawed-Off Shotgun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mind's Eye",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shining Trapezohedron",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Nightmare Bauble",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dream Parasite - Weakness",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scavenging",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guardian Angel",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Obscure Studies",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Whispers from the Deep - Weakness",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "In the Shadows",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Showmanship",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Scraps - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sea Change Harpoon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Silas's Net",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Book of Psalms",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blessed Blade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Sanctification",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hand of Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptographic Cipher",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Grimoire",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deep Knowledge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Plan of Action",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".25 Automatic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Ritual",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Obfuscation",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Faustian Bargain",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sword Cane",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tides of Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ward of Radiance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Promise of Power",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       4,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Token of Faith",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Keep Faith",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Predestined",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beloved",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Tempt Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Riot Whistle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Righteous Hunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sacred Covenant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eldritch Sophist",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stirring Up Trouble",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blasphemous Covenant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Breaking and Entering",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Skeptic",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "False Covenant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Armageddon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eye of Chaos",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shroud of Shadows",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Paradoxical Covenant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mariner's Compass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancient Covenant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Keen Eye",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Radiant Smite",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Truth Beckons",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Gaze of Ouraxsh",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Priest of Two Faiths",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Under Surveillance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Blood Pact",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Abyssal Tome",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Butterfly Effect",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Third Time's a Charm",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Manipulate Destiny",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enchanted Armor",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body. Arcane",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Blessing of Isis",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Grimoire",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Grimoire",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ríastrad",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tristan Botley",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Curse of Aeons",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Unrelenting",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Signum Crucis",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Holy Rosary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Shield of Faith",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fey",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guided by the Unseen",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Lucky\" Penny",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Eye of the Djinn",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Armageddon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eye of Chaos",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shroud of Shadows",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Spirit of Humanity",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Harmony Restored",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enchant Weapon",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nephthys",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Stygian Eye",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       10,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       3,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hyperawareness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Geas",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hard Knocks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Ikiaq",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Flute of the Outer Gods",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       -2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "A Watchful Peace",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dig Deep",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Favor of the Moon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Favor of the Sun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Purifying Corruption",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hallow",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Holy Spear",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancestral Knowledge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ariadne's Twine",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".25 Automatic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Justify the Means",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky Dice",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Equilibrium",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jacob Morrison",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrine of the Moirai",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mechanic's Wrench",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Livre d'Eibon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Trusty Bullwhip",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Discipline",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shrewd Dealings",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Geared Up",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Toe to Toe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"Get behind me!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gang Up",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sweeping Kick",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Defensive Stance",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Butterfly Swords",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dodge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Combat Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "On the Hunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fang of Tyr'thrha",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Butterfly Swords",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Forced Learning",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Jeremiah Kirby",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archive of Conduits",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Written in the Stars",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hiking Boots",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Join the Caravan",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Survey the Area",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Medical Texts",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Unearth the Ancients",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Scientific Theory",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archive of Conduits",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archive of Conduits",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archive of Conduits",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Archive of Conduits",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Prophesiae Profana",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Underworld Support",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scout Ahead",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "21 or Bust",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Counterespionage",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cheat the System",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Untimely Transaction",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Savant",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Red Clock",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Money Talks",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Black Market",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Moxie",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "The Black Fan",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Red Clock",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Down the Rabbit Hole",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dragon Pole",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Meditative Trance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Close the Circle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Winds of Power",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Foresight",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Theory",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Parallel Fates",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Astronomical Atlas",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Healing Words",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grounded",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "True Magick",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand. Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Short Supply",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Schoffner's Catalogue",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bandages",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Jury-Rig",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bangle of Jinxes",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Burn After Reading",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Strength in Numbers",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dauntless Spirit",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blood Will Have Blood",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fire Extinguisher",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Plucky",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fend Off",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Medical Student",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Trail",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "On the Trail",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Michael Leigh",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Snipe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Old Shotgun",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quickdraw Holster",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Brand of Cthugha",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nkosi Mabati",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Brand of Cthugha",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cyclopean Hammer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sledgehammer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Protective Gear",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sledgehammer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       3,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pocket Telescope",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eon Chart",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Gené Beauregard",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Eon Chart",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Divination",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Protecting the Anirniq",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Divination",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Professor William Webb",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ice Pick",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Professor William Webb",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ice Pick",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ethereal Slip",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Blur",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Ethereal Slip",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Blur",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"Hit me!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Unscrupulous Loan",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Precious Memento",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Precious Memento",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Talisman of Protection",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Earthly Serenity",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Enchanted Bow",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand x2. Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Earthly Serenity",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Prophetic",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Mystic",
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sleuth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Seeker",
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bruiser",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Crafty",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Antiquary",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//       "Rogue",
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "In the Thick of It",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Heavy Furs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sled Dog",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rod of Animalism",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Call for Backup",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"As you wish\"",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bonesaw",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Mend",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wounded Bystander - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grappling Hook",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Word of Woe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Word of Weal",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Darrell's Kodak",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Bonnie Walsh",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hunter's Armor",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Runic Axe",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Custom Modifications",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Obsidian Bracelet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bolas",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Breach the Door",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grievous Wound",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Motivational Speech",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "One in the Chamber",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Fighting Lessons",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Helping Hand",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bestow Resolve",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Field Agent",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Guard Dog",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Handcuffs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Prepared for the Worst",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Martyr's Vambrace",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Girish Kadakia",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ever Vigilant",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alchemical Distillation",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Empirical Hypothesis",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Raven Quill",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dissection Tools",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Grim Memoir",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Research Notes",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bizarre Diagnosis",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Captivating Discovery",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Map the Area",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Analysis",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lab Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Orphic Theory",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Existential Riddle",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Guidance",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. William T. Maleson",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Press Pass",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Surgical Kit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fingerprint Kit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gray's Anatomy",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Damning Testimony",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Friends in Low Places",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Honed Instinct",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Disguise",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Embezzled Treasure",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Thieves' Kit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hidden Pocket",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hit and Run",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"I'll take that!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Kicking the Hornet's Nest",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quick Getaway",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Calculated Risk",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stylish Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Chuck Fergus",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dirty Fighting",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Breaking and Entering",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Thieves' Kit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Trigger Man",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Underworld Market",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clean Sneak",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Living Ink",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Summoned Servitor",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally. Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Power Word",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ceremonial Sickle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dowsing Rod",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hallowed Chalice",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Onyx Pentacle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Eldritch Initiation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Explosive Ward",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       -2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "String of Curses",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Binder's Jar",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ghastly Possession",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Astral Mirror",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Elle Rubash",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Moonlight Ritual",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sin-Eater",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Uncage the Soul",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ceremonial Sickle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dowsing Rod",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Onyx Pentacle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Pocket Multi Tool",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Makeshift Trap",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Grizzled",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Idol of Xanatos",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Improvised Shield",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "End of the Road",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Exploit Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Making Preparations",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Predator or Prey",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Shed a Light",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "At a Crossroads",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lifeline",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nature of the Beast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gumption",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Baseball Bat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Katja Eastbank",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Heed the Dream",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Salvage",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Keyring",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Fickle Fortune",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hyperphysical Shotcaster",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Tool Belt",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Refine",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Flashlight",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Soul Sanctification",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quantum Paradox - Basic Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pay Your Due - Basic Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       10,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Underprepared - Basic Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Chemistry Set",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dr. Charles West III",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Microscope",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ravenous Myconid",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Uncanny Growth",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Well-Funded",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I'll Pay You Back!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pitchfork",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sparrow Mask",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pushed to the Limit",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stall for Time",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wrong Place, Right Time",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Long Shot",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Physical Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dynamite Blast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hyperawareness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Barricade",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hard Knocks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Hot Streak",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Studies",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind Wipe",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dig Deep",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Rabbit's Foot",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Bandolier",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blackjack",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Preposterous Sketches",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Strange Solution",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Contraband",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Think on Your Feet",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Rite of Seeking",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clarity of Mind",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Oops!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Rise to the Occasion",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".32 Colt",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Eat lead!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Logical Reasoning",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       3,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Archaic Glyphs",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stealth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Suggestion",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alchemical Transmutation",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Storm of Spirits",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lantern",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Gravedigger's Shovel",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Blood Eclipse",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Survival Knife",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Truth from Fiction",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       3,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ancient Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Decorated Skull",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Colt Vest Pocket",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Mists of R'lyeh",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Chthonian Stone",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Alter Fate",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "On Your Own",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Backpack",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dendromorphosis - Basic Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Star • XVII",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Hallowed Mirror",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The World • XXI",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Lexicon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Knight of Swords",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Well Connected",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "The Hierophant • V",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sign Magick",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nine of Rods",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Trial by Fire",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Fool • 0",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Moon Pendant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Observed",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Devil • XV - Basic Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Tarot",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Randall Cho",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Boxing Gloves",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Flesh Ward",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grete Wagner",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Physical Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Relentless",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Safeguard",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clean Them Out",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Counterpunch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dodge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"Get over here!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Glory",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Monster Slayer",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "One-Two Punch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Stand Together",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vicious Blow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Evidence!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Galvanize",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Counterpunch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "\"Get over here!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lesson Learned",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mano a Mano",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Overpower",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       3,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Boxing Gloves",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grete Wagner",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       5,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dynamite Blast",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Taunt",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Physical Training",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "One-Two Punch",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Guardian",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       4,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Vault of Knowledge",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Enlightenment",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Celaeno Fragments",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Disc of Itzamna",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Encyclopedia",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Feed the Mind",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forbidden Tome",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Higher Education",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Laboratory Assistant",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Whitton Greene",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Burning the Midnight Oil",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Writings",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Extensive Research",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       12,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Occult Invocation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Preposterous Sketches",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Deduction",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Library Docent",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Glimpse the Unthinkable",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Esoteric Atlas",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Whitton Greene",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cryptic Writings",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"I've got a plan!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mind over Matter",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Seeking Answers",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Perception",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       3,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forbidden Tome",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Forbidden Tome",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Farsight",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Miskatonic Archaeology Funding",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Necronomicon",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Seeker",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       5,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Anything You Can Do, Better",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       6,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Arrogance - Weakness",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Reckless - Basic Weakness",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lockpicks",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mauser C96",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Switchblade",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky Cigarette Case",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lonnie Ritter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leather Jacket",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Streetwise",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Cheap Shot",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daring Maneuver",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Slip Away",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pilfer",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Sneak By",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Nimble",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daredevil",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Opportunist",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Liquid Courage",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mauser C96",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Daring Maneuver",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cheap Shot",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Slip Away",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Manual Dexterity",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       3,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky Cigarette Case",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Sharpshooter",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Pilfer",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Backstab",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Copycat",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Beretta M1918",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Chuck Fergus",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Rogue",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Arbiter of Fates",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Ritual Candles",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrying Mirror",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Azure Flame",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clairvoyance",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ineffable Truth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Familiar Spirit",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Crystal Pendulum",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Robes of Endless Night",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Astral Travel",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hypnotic Gaze",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Parallel Fates",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Voice of Ra",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Prophecy",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Defiance",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Prescient",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Eldritch Inspiration",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grotesque Statue",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Robes of Endless Night",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Hypnotic Gaze",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Guts",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       3,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Azure Flame",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clairvoyance",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ineffable Truth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Arcane Studies",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       2,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Recharge",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       3,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Azure Flame",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Clairvoyance",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ineffable Truth",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Mystic",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//       "Arcane",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Neither Rain nor Snow",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       3,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".18 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Grimm's Fairy Tales",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Old Keyring",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Granny Orne",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mysterious Raven",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Rabbit's Foot",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Scrapper",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Will to Survive",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "A Test of Will",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dumb Luck",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Grit Your Teeth",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Live and Learn",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Look what I found!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Oops!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       2,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Take Heart",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       0,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Cherished Keepsake",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Leather Coat",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       1,
//     ],
//     slot: [
//       "Body",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       ".18 Derringer",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "A Test of Will",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "\"Look what I found!\"",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Dumb Luck",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       2,
//     ],
//   },
//   {
//     cardName: [
//       "Unexpected Courage",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       2,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Granny Orne",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Lucky!",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       3,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Chainsaw",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//       "Hand x2",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       3,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Quick Learner",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       4,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Déjà Vu",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Survivor",
//     ],
//     xp: [
//       5,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ravenous",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Ravenous - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Regurgitation",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Daisy's Tote Bag",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "The Necronomicon - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "On the Lam",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Heirloom of Hyperborea",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dark Memory - Weakness",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Directive",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Directive",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Directive",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Directive",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Directive",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Roland's .38 Special",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Hand",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Tidal Memento",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Wendy's Amulet",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Pete's Guitar",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Green Man Medallion",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Accessory",
//     ],
//     cost: [
//       1,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mysteries Remain",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       1,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Split the Angle",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       2,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Foolishness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       4,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Nautical Prowess",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       1,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Dreams of the Deep - Weakness",
//     ],
//     typeName: [
//       "Skill",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Molly Maxwell",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       1,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       1,
//     ],
//   },
//   {
//     cardName: [
//       "Ruth Westmacott",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       1,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       2,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Mystifying Song",
//     ],
//     typeName: [
//       "Event",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//     ],
//     cost: [
//       3,
//     ],
//     wild: [
//       2,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
//   {
//     cardName: [
//       "Baron Samedi - Weakness",
//     ],
//     typeName: [
//       "Asset",
//     ],
//     class: [
//       "Neutral",
//     ],
//     xp: [
//       undefined,
//     ],
//     slot: [
//       "Ally",
//     ],
//     cost: [
//       "-",
//     ],
//     wild: [
//       0,
//     ],
//     willpower: [
//       0,
//     ],
//     intellect: [
//       0,
//     ],
//     combat: [
//       0,
//     ],
//     agility: [
//       0,
//     ],
//   },
// ]