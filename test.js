const objectives = require('./data.js');

it('verify', () => {
  for (const objective of objectives) {
    for (const requiredObjectiveId of objective.requires) {
      if (!objectives.find(o => o.id === requiredObjectiveId)) {
        throw new Error('missing ' + requiredObjectiveId);
      }
    }
  }
});
