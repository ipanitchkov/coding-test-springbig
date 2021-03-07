function getAnagramKey(anagram) {
  return anagram.split('').sort().join('');
}

function findAnagrams(words, toLowerCase = false) {
  if (words) {
    const anagrams = (toLowerCase ? words.toLowerCase() : words).split(',');
    const anagramsHash = {};

    anagrams.forEach((anagram) => {
      const key = getAnagramKey(anagram);

      if (!anagramsHash[key]) {
        anagramsHash[key] = [];
      }
      anagramsHash[key].push(anagram);
    });

    return Object.values(anagramsHash);
  }
  return [];
}

module.exports = {
  getAnagramKey,
  findAnagrams,
};
