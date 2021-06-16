// Static arrays of messages
const danger = ['An Ambitious Organization', 'Planar Forces', 'Arcane Enemies', 'Hordes', 'A Cursed Place'];
const doom = ['Tyranny', 'Pestilence', 'Destruction', 'Usurptation', 'Impoverishment', 'Rampant Chaos'];
const portentWitness = ['A local', 'A traveller', 'An animal', 'A criminal', 'A monster', 'A place'];
const portentVerb = ['has found', 'has seen', 'has hidden', 'is dead because of', 'is alive because of', 'was caught with'];
const portent = ['a secret cache of stolen supplies', 'an area with unnatural properties', 'a gem that shares knowledge', 'a trail with hundreds of footprints', 'a glow rising from the west' ];
const stakes = ['What will become of our friends?', 'What will we have to sacrifice?', 'Will we ever return?', 'Are we capable enough?', 'Are we the bad guys?', 'Can things return to normal?'];

// Random selection function
const random = array => {
    return array[Math.floor(Math.random() * (array.length))]
};

console.log(`The danger facing the players is that of ${random(danger)}.`);
console.log(`The ultimate doom is one of ${random(doom)}.`);
console.log(`${random(portentWitness)} ${random(portentVerb)} ${random(portent)}.`)
console.log(`The players must ask "${random(stakes)}".`)