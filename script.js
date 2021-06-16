// Static arrays of messages
const danger = ['An Ambitious Organization', 'Planar Forces', 'Arcane Enemies', 'Hordes', 'A Cursed Place'];
const doom = ['Tyranny', 'Pestilence', 'Destruction', 'Usurptation', 'Impoverishment', 'Rampant Chaos'];
const portentWitness = ['A Local', 'A Traveller', 'An Animal', 'A Criminal', 'A Monster', 'A Place'];
const portentVerb = ['has found', 'has seen', 'has hidden', 'is dead because of', 'is alive because of', 'was caught with'];
const portent = ['a secret cache of stolen supplies', 'an area with unnatural properties', 'a gem that shares knowledge', 'a trail with hundreds of footprints', 'a glow rising from the west' ];
const stakes = [];

// Random selection function
const random = array => {
    return array[Math.floor(Math.random() * (array.length))]
};

console.log(`The danger facing the players is that of ${random(danger)}.`);
console.log(`The ultimate doom is one of ${random(doom)}.`);
console.log(`${random(portentWitness)} ${random(portentVerb)} ${random(portent)}.`)