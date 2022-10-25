const { all, url_friendly } = require('../data/characters');

const generateID = (LENGTH, URL_FRIENDLY) => {
    if (LENGTH && typeof LENGTH !== 'number') throw new Error("[ERROR]: LENGTH Parameter should be a valid Number.");
    if (URL_FRIENDLY && typeof URL_FRIENDLY !== 'boolean') throw new Error("[ERROR]: URL_FRIENDLY Parameter should be a valid Boolean.");
    if (URL_FRIENDLY === null || URL_FRIENDLY === true) {
        const len = LENGTH || 6;
        var ID = "";
        for (i = 1; i <= len; i++) {
            const char = url_friendly[Math.floor(Math.random() * url_friendly.length)];
            ID += `${char}`;
        }
        return ID;
    } else {
        const len = LENGTH || 6;
        var ID = "";
        for (i = 1; i <= len; i++) {
            const char = all[Math.floor(Math.random() * all.length)];
            ID += `${char}`;
        }
        return ID;
    }
}

module.exports = generateID;