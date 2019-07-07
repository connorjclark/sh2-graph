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
    label: 'Brookhaven Hospital',
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
    label: 'Silent Hill Historical Society',
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
  {
    id: 'prison',
    label: 'Toluca Prison',
    group: 'prison',
    requires: [
      'spiral-writing-key',
    ],
  },
  {
    id: 'gluttonous-pig',
    group: 'prison',
    requires: [
      'prison',
    ],
  },
  {
    id: 'the-seductress',
    group: 'prison',
    requires: [
      'prison',
    ],
  },
  {
    id: 'the-oppressor',
    group: 'prison',
    requires: [
      'prison',
    ],
  },
  {
    id: 'wax-doll',
    group: 'prison',
    requires: [
      'prison',
    ],
  },
  {
    id: 'horseshoe',
    group: 'prison',
    requires: [
      'gluttonous-pig',
      'the-seductress',
      'the-oppressor',
    ],
  },
  {
    id: 'labyrinth',
    group: 'labyrinth',
    requires: [
      'wax-doll',
      'horseshoe',
    ],
  },
  {
    id: 'great-knife',
    group: 'labyrinth',
    requires: [
      'labyrinth',
    ],
  },
  {
    id: 'box-puzzle',
    group: 'labyrinth',
    requires: [
      'labyrinth',
    ],
  },
  {
    id: 'wire-cutter',
    group: 'labyrinth',
    requires: [
      'box-puzzle',
    ],
  },
  {
    id: 'doorman-boss',
    group: 'labyrinth',
    requires: [
      'wire-cutter',
    ],
  },
  {
    id: 'hangman-puzzle',
    group: 'labyrinth',
    requires: [
      'doorman-boss',
    ],
  },
  {
    id: 'key-of-the-persecuted',
    group: 'labyrinth',
    requires: [
      'hangman-puzzle',
    ],
  },
  {
    id: 'eddie-boss',
    group: 'labyrinth',
    requires: [
      'key-of-the-persecuted',
    ],
  },
  {
    id: 'hotel',
    label: 'Lakeview Hotel',
    group: 'hotel',
    requires: [
      'eddie-boss',
    ],
  },
  {
    id: 'little-mermaid',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'cinderella',
    group: 'hotel',
    requires: [
      'thinner',
      'key-to-room-204',
    ],
  },
  {
    id: 'snow-white',
    group: 'hotel',
    requires: [
      'elevator-puzzle',
    ],
  },
  {
    id: 'fish-key',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'thinner',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'key-to-room-204',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'key-to-room-312',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'employee-elevator-key',
    group: 'hotel',
    requires: [
      'key-to-room-204',
    ],
  },
  {
    id: 'elevator-puzzle',
    group: 'hotel',
    requires: [
      'employee-elevator-key',
    ],
  },
  {
    id: 'videotape',
    group: 'hotel',
    requires: [
      'elevator-puzzle',
    ],
  },
  {
    id: 'can-opener',
    group: 'hotel',
    requires: [
      'elevator-puzzle',
    ],
  },
  {
    id: 'bar-key',
    group: 'hotel',
    requires: [
      'hotel',
    ],
  },
  {
    id: 'lightbulb',
    group: 'hotel',
    requires: [
      'can-opener',
    ],
  },
  {
    id: 'hotel-stairway-key',
    group: 'hotel',
    requires: [
      'little-mermaid',
      'cinderella',
      'snow-white',
      // Need this to get out of the bar.
      'lightbulb',
    ],
  },
  {
    id: 'view-tape',
    group: 'hotel',
    requires: [
      'hotel-stairway-key',
      'videotape',
      'key-to-room-312',
    ],
  },
  {
    id: 'alternate-hotel',
    group: 'alternate-hotel',
    requires: [
      'view-tape',
    ],
  },
  {
    id: 'crimson-ceremonies',
    group: 'alternate-hotel',
    requires: [
      'alternate-hotel',
    ],
  },
  {
    id: 'pyramid-heads-boss',
    group: 'alternate-hotel',
    requires: [
      'alternate-hotel',
    ],
  },
  {
    id: 'scarlet-egg',
    group: 'alternate-hotel',
    requires: [
      'pyramid-heads-boss',
    ],
  },
  {
    id: 'rust-colored-egg',
    label: 'Rust-Colored Egg',
    group: 'alternate-hotel',
    requires: [
      'pyramid-heads-boss',
    ],
  },
  {
    id: 'maria-boss',
    group: 'alternate-hotel',
    requires: [
      'scarlet-egg',
      'rust-colored-egg',
    ],
  },
];

// Normalize
for (const objective of data) {
  objective.label = objective.label ||
    objective.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  objective.group = objective.group || 'outside';
  objective.requires = objective.requires || [];
}

module.exports = data;
