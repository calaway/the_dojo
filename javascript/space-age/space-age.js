export const age = (planet, ageInSeconds) => {
  const secondsPerDay = 31557600;
  const earthYears = Math.round((ageInSeconds / secondsPerDay) * 100) / 100;

  const orbitalRatio = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  return Math.round((earthYears / orbitalRatio[planet]) * 100) / 100;
};
