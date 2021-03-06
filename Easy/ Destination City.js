var destCity = function (paths) {
  const map = new Map(paths);
  for (let key of map) {
    if (!map.has(key[1])) return key[1];
  }
};
