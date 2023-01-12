// 03 thong ke ki tu co trong cau

export function characters(str) {
  if (str === "") return {};

  const listCharacters = {};

  str
    .split("")
    .filter((x) => x !== "")
    .forEach((character) => {
      listCharacters[character] =
        listCharacters[character] !== undefined
          ? listCharacters[character] + 1
          : 1;
    });

  return listCharacters;
}
