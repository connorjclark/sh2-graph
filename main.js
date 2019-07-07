const vis = require('vis');
const objectives = require('./data.js');

const nodes = new vis.DataSet(objectives.map(node => {
  return {
    id: node.id,
    label: node.label,
    group: node.group,
  };
}));

const edges = new vis.DataSet();
for (const objective of objectives) {
  for (const requiredObjectiveId of objective.requires) {
    edges.update({ from: requiredObjectiveId, to: objective.id });
  }
}

const groups = [...new Set(objectives.map(o => o.group))];

// https://dev.to/ben/write-a-function-that-outputs-a-pleasant-text-color-hex-given-a-background-color-hex-1ed1
// TODO generate this?
const preselectedColors = [
  {
    background: 'rgb(151, 18, 128)',
    font: 'rgb(200, 224, 204)',
  },
  {
    background: 'rgb(183, 197, 78)',
    font: 'rgb(10, 10, 10)',
  },
  {
    background: 'rgb(155, 167, 151)',
    font: 'rgb(41, 13, 50)',
  },
  {
    background: 'rgb(255, 88, 100)',
    font: 'rgb(22, 66, 63)',
  },
  {
    background: 'rgb(187, 211, 234)',
    font: 'rgb(85, 83, 81)',
  },
];
const outsideColors = preselectedColors.pop();

function adjustBrightness(col, amt) {
  let [R, G, B] = col.slice(4, col.length - 1).split(',').map(s => parseInt(s, 16));

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  R = R + amt;
  G = G + amt;
  B = B + amt;

  if (R > 255) R = 255;
  else if (R < 0) R = 0;

  if (G > 255) G = 255;
  else if (G < 0) G = 0;

  if (B > 255) B = 255;
  else if (B < 0) B = 0;

  var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

// create a network
const container = document.createElement('div');
container.classList.add('sh2-container');
const options = {
  height: window.innerHeight + 'px',
  layout: {
    hierarchical: {
      sortMethod: 'directed'
    },
  },
  edges: {
    arrows: {
      to: {
        enabled: true,
      },
    }
  },
  nodes: {
    borderWidth: 2,
  },
  groups: groups.reduce((acc, group, index) => {
    const preselectedColor = group === 'outside' ? outsideColors : preselectedColors[index % preselectedColors.length];
    acc[group] = {
      color: {
        background: preselectedColor.background,
        highlight: adjustBrightness(preselectedColor.background, 10),
      },
      font: { color: preselectedColor.font },
    };
    return acc;
  }, {}),
};

const network = new vis.Network(container, { nodes, edges }, options);
document.body.appendChild(container);
network.once('afterDrawing', () => {
  network.focus('radio', {
    scale: 1,
    offset: {
      y: -window.innerHeight / 2.5,
    },
    animation: {
      duration: 1000,
    },
  });
});
