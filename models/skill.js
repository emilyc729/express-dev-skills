const skills = [
    {
        name: 'JavaScript', 
        description: 'The greatest programming language of all time, No questions.',
        level: 5
    },
    {
        name: 'HTML', 
        description: 'HTML handles structure',
        level: 3
    },
    {
        name: 'CSS', 
        description: 'CSS handles style',
        level: 9
    }
];

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    updateSkill
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function updateSkill(id, skill) {
    skills[id] = skill;
}