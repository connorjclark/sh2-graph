const data = [
  {
    id: 'new-game-plus',
  },
  {
    id: 'chainsaw',
    requires: ['new-game-plus'],
  },
  {
    id: 'hyper-spray',
    requires: ['new-game-plus'],
  },
  {
    id: 'radio',
    group: 'outside',
  },
  {
    id: 'wooden-plank',
  },
  {
    id: 'apartment-gate-key',
    requires: [
      'radio',
      'wooden-plank',
    ],
  },
  {
    id: 'flashlight',
    group: 'apartments',
    requires: [
      'apartment-gate-key',
    ],
  },
  {
    id: 'handgun',
    group: 'apartments',
    requires: [
      'flashlight',
    ],
  },
  {
    id: 'key-to-room-202',
    group: 'apartments',
    requires: [
      'flashlight',
    ],
  },
  {
    id: 'clock-key',
    group: 'apartments',
    requires: [
      'flashlight',
    ],
  }
];

// Normalize
for (const objective of data) {
  objective.group = objective.group || 'outside';
  objective.requires = objective.requires || [];
}

module.exports = data;
