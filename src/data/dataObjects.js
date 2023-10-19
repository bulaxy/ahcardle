const jsonfile = require("./arkhamdb.com.json");
export const dataObjects = jsonfile.filter(o=> ['skill', 'asset', 'event'].includes(o.type_code)&& !o.duplicate_of && o.pack_code !='rcore'&& !o.restrictions && o.subtype_code!='basicweakness' && !o.bonded_to && o.subtype_code!='weakness'&& o.pack_code != 'fhvp').map(o=>({
    id:o.code,
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
