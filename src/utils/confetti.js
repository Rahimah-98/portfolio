import confetti from 'canvas-confetti';

const colors = ['#ff7a00', '#2f8de4', '#ffd21c', '#f45be8', '#63c7f5'];

const squiggle = confetti.shapeFromPath({
  path: 'M 2 2 C 8 12, -4 18, 6 28',
});

const curl = confetti.shapeFromPath({
  path: 'M 2 2 C 16 4, 16 16, 6 18 C -2 20, 0 8, 10 10',
});

export const celebrate = () => {
  const base = {
    colors,
    shapes: [squiggle, curl],
    scalar: 1.1,
    gravity: 0.7,
    decay: 0.94,
    ticks: 180,
    startVelocity: 25,
    spread: 100,
  };

  confetti({
    ...base,
    particleCount: 25,
    origin: { x: 0.15, y: 0.65 },
  });

  setTimeout(() => {
    confetti({
      ...base,
      particleCount: 25,
      origin: { x: 0.85, y: 0.65 },
    });
  }, 120);
};
