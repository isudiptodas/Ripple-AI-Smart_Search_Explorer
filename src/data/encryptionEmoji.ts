export const encrypt = [
  { key: 'A', value: '😀' }, { key: 'B', value: '🐶' }, { key: 'C', value: '🍕' }, { key: 'D', value: '🚀' },
  { key: 'E', value: '🎉' }, { key: 'F', value: '🌈' }, { key: 'G', value: '🔥' }, { key: 'H', value: '🍰' },
  { key: 'I', value: '🌍' }, { key: 'J', value: '⭐' }, { key: 'K', value: '🐱' }, { key: 'L', value: '🍔' },
  { key: 'M', value: '🎶' }, { key: 'N', value: '💡' }, { key: 'O', value: '🍩' }, { key: 'P', value: '🦄' },
  { key: 'Q', value: '🪐' }, { key: 'R', value: '🌊' }, { key: 'S', value: '🐧' }, { key: 'T', value: '🥑' },

  { key: 'U', value: '🎮' }, { key: 'V', value: '🍓' }, { key: 'W', value: '🎤' }, { key: 'X', value: '🌵' },
  { key: 'Y', value: '🐸' }, { key: 'Z', value: '🦖' },

  { key: 'a', value: '🛸' }, { key: 'b', value: '🧩' }, { key: 'c', value: '🧊' }, { key: 'd', value: '🦋' },
  { key: 'e', value: '🥨' }, { key: 'f', value: '⚽' }, { key: 'g', value: '🏀' }, { key: 'h', value: '🏈' },
  { key: 'i', value: '⚾' }, { key: 'j', value: '🎾' }, { key: 'k', value: '🏐' }, { key: 'l', value: '🎱' },
  { key: 'm', value: '🥎' }, { key: 'n', value: '🥊' }, { key: 'o', value: '🏓' }, { key: 'p', value: '🥁' },
  { key: 'q', value: '🎸' }, { key: 'r', value: '🎷' }, { key: 's', value: '🎺' }, { key: 't', value: '🪕' },

  { key: 'u', value: '🎻' }, { key: 'v', value: '🪗' }, { key: 'w', value: '🎧' }, { key: 'x', value: '🎹' },
  { key: 'y', value: '💻' }, { key: 'z', value: '📱' },

  { key: '0', value: '🎲' }, { key: '1', value: '🛹' }, { key: '2', value: '🎳' }, { key: '3', value: '🧸' },
  { key: '4', value: '🚗' }, { key: '5', value: '✈' }, { key: '6', value: '🚲' }, { key: '7', value: '🚂' },
  { key: '8', value: '🚕' }, { key: '9', value: '🚤' },

  { key: '+', value: '🎈' }, { key: '/', value: '🎁' }, { key: '=', value: '🎂' },
  { key: '#', value: '🔑' }, { key: '@', value: '📧' }, { key: '.', value: '🔔' },
  { key: '-', value: '📌' }, { key: ':', value: '🐝' }
];


export const decrypt = encrypt.map(e => ({ key: e.value, value: e.key }));
