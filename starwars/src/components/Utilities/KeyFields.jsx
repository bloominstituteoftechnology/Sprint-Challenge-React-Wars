const swapiKeys = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

export function getPeopleFields(o) {
  let keys = [];
  for (let key in o) {
    if(swapiKeys.indexOf(key) !== -1) {
      keys.push(key);
    }
  }
  return keys;
}