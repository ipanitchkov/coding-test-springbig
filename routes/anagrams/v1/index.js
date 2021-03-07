const express = require('express');

const router = express.Router();
const { findAnagrams } = require('../../../utils');

function getAnagrams({ query }, res) {
  const { words } = query;

  res.json({ anagrams: findAnagrams(words, true) });
}

module.exports = router.get('/anagrams', getAnagrams);
