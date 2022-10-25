const { numbers } = require('../data/characters');

const generateNumID = (LENGTH) => {
    if (LENGTH && typeof LENGTH !== 'number') throw new Error("[ERROR]: LENGTH Parameter should be a valid Number.");
    const len = LENGTH || 6;
    var ID = "";
    for (i = 1; i <= len; i++) {
        const char = numbers[Math.floor(Math.random() * numbers.length)];
        ID += `${char}`;
    }
    return ID;
}

module.exports = generateNumID;