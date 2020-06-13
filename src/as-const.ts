export {};

let name = 'Atsushi';

name = 'Atsu';

let nickname = 'Atsu' as const;
nickname = 'Atsu';

let profile = {
  name: 'Atsushi',
  height: 175,
} as const;

// profile.name = 'Atsu';
// profile.height = 180;