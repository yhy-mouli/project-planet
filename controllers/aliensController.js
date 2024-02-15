const fs = require('fs');

let aliens = [];

function getAllAliens(req, res) {
    res.json(aliens);
}

function createAlien(req, res) {
    const { name, beverage, color } = req.body;
    const newAlien = { name, beverage, color };
    newAlien.id = aliens.length + 1;
    aliens.push(newAlien);
    saveData();
    res.json(newAlien);
}

function updateAlien(req, res) {
    const { id } = req.params;
    const { name, beverage, color } = req.body;
    const alien = aliens.find(a => a.id === parseInt(id));

    if (alien) {
        alien.beverage = beverage;
        alien.name = name;
        alien.color = color;
        saveData();
        res.json(alien);
    } else {
        res.status(404).json({ message: 'Alien not found' });
    }
}

function deleteAlien(req, res) {
    const { id } = req.params;
    aliens = aliens.filter(a => a.id !== parseInt(id));
    saveData();
    res.json({ message: 'Alien deleted' });
}

function saveData() {
    fs.writeFileSync('aliens.json', JSON.stringify(aliens, null, 2), 'utf-8');
}

module.exports = {
    getAllAliens,
    createAlien,
    updateAlien,
    deleteAlien
};
