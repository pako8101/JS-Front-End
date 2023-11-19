function register(input) {
  let heroes = [];

  input.forEach((h) => {
    let [name, level, items] = h.split(" / ");
    let hero = {
      name,
      level: Number(level),
      items: items,
    };
    heroes.push(hero);
  });

  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    });
}

register([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
