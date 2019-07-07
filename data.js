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
  },
  {
    id: 'courtyard-key',
    group: 'apartments',
    requires: [
      'clock-key',
    ],
  },
  {
    id: 'fire-escape-key',
    group: 'apartments',
    requires: [
      'clock-key',
    ],
  },
  {
    id: 'canned-juice',
    group: 'apartments',
    requires: [
      'clock-key',
    ],
  },
  {
    id: 'coin-old-man',
    group: 'apartments',
    requires: [
      'canned-juice',
    ],
  },
  {
    id: 'coin-snake',
    group: 'apartments',
    requires: [
      'courtyard-key',
    ],
  },
  {
    id: 'wallet-in-the-toilet-bowl',
    group: 'apartments',
    requires: [
      'fire-escape-key',
    ],
  },
  {
    id: 'room-109',
    group: 'apartments',
    requires: [
      'fire-escape-key',
    ],
  },
  {
    id: 'angelas-knife',
    group: 'apartments',
    requires: [
      'room-109',
    ],
  },
  {
    id: 'coin-prisoner',
    group: 'apartments',
    requires: [
      'room-109',
    ],
  },
  {
    id: 'white-prism',
    group: 'apartments',
    requires: [
      'fire-escape-key',
    ],
  },
  {
    id: 'coin-puzzle',
    group: 'apartments',
    requires: [
      'coin-old-man',
      'coin-snake',
      'coin-prisoner',
    ],
  },
  {
    id: 'lyne-house-key',
    group: 'apartments',
    requires: [
      'coin-puzzle',
    ],
  },
  {
    id: 'apartment-stairway-key',
    group: 'apartments',
    requires: [
      'lyne-house-key',
    ],
  },
  {
    id: 'pyramid-head-boss',
    group: 'apartments',
    requires: [
      'apartment-stairway-key',
    ],
  },
  {
    id: 'maria-cutscene',
    group: 'outside',
    requires: [
      'pyramid-head-boss',
    ],
  },
  {
    id: 'steel-pipe',
    group: 'outside',
    requires: [
      'maria-cutscene',
    ],
  },
  {
    id: 'lost-memories',
    group: 'outside',
    requires: [
      'maria-cutscene',
    ],
  },
  {
    id: 'bowl-a-roma',
    group: 'outside',
    requires: [
      'maria-cutscene',
    ],
  },
  {
    id: 'hospital',
    group: 'hospital',
    requires: [
      'bowl-a-roma',
    ],
  },
  {
    id: 'purple-bull-key',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'bent-needle',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'examination-room-key',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'lapis-eye-key',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'roof-key',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'peice-of-hair',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'elevator-key',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'hanging-demons-boss',
    group: 'hospital',
    requires: [
      'hospital',
    ],
  },
  {
    id: 'alternate-hospital',
    group: 'alternate-hospital',
    requires: [
      'hanging-demons-boss',
    ],
  },
  {
    id: 'dry-cell-battery',
    group: 'alternate-hospital',
    requires: [
      'alternate-hospital',
    ],
  },
  {
    id: 'basement-storeroom-key',
    group: 'alternate-hospital',
    requires: [
      'alternate-hospital',
    ],
  },
  {
    id: 'copper-ring',
    group: 'alternate-hospital',
    requires: [
      'alternate-hospital',
    ],
  },
  {
    id: 'lead-ring',
    group: 'alternate-hospital',
    requires: [
      'alternate-hospital',
    ],
  },
  {
    id: 'hospital-lobby-key',
    group: 'alternate-hospital',
    requires: [
      'alternate-hospital',
    ],
  },
  {
    id: 'old-bronze-key',
    group: 'outside',
    requires: [
      'hospital-lobby-key',
    ],
  },
  {
    id: 'historical-society',
    group: 'historical-society',
    requires: [
      'old-bronze-key',
    ],
  },
  {
    id: 'obsidian-goblet',
    group: 'historical-society',
    requires: [
      'historical-society',
    ],
  },
  {
    id: 'spiral-writing-key',
    group: 'historical-society',
    requires: [
      'historical-society',
    ],
  },
];

// Normalize
for (const objective of data) {
  objective.group = objective.group || 'outside';
  objective.requires = objective.requires || [];
}

module.exports = data;
