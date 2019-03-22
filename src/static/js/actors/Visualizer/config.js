export const config = {
  // Audio
  audioSource: require('../../../sounds/music.mp3'),
  channels: {
    left: 'L',
    right: 'R'
  },
  blockLength: 256,
  // Styling
  circle: {
    radius: 150,
    lineWidth: 3,
    stroke: ['blue', 'purple']
  },
  volumeBar: {
    angleOffset: 1.5 * Math.PI, // Start drawing arc from top center
    lineWidth: 3,
    fillLeft: frequency => `rgb(255, ${frequency}, 0)`,
    fillRight: frequency => `rgb(0, ${frequency}, 255)`
  }
};
