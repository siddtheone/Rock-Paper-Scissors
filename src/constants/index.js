export const SHAPES = window.location.search === '' ? ['Rock', 'Paper', 'Scissors'] : ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

export const RULES = window.location.search === '' ? new Map([
  [0, [2]],
  [1, [0]],
  [2, [1]]
]) : new Map([
  [0, [2, 3]],
  [1, [0, 4]],
  [2, [1, 3]],
  [3, [1, 4]],
  [4, [0, 2]],
]);
