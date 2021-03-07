# The project consists of a Node.js backend application using Express.js that finds anagrams in a list of words

## Instructions

1. In order to run the project you need to install the dependencies. Go to the main folder and perform `npm install`.
2. Once the installation is done you could run the application either in production (`npm start`) or development (`npm run dev`) mode.
   The application will be accepting http requests on port 3000.

## Playground

- There is a Postman collection file under the main folder. You could import it in your Postman application and use the collection to deal with the system.
- There is a set of unit tests that cover the implementation. You could run them by issuing `npm test` from command line under the main folder.
- Prettier could be executed by issuing `npm run prettier`.
- The coverage could be generated by running `npm run coverage`.

## Extras

- ESLint support
- Prettier support
- Unit tests
- Coverage

## Coding challenge - anagrams

**Description:**

- Create a node and express web server that handles GET requests for the route:
  - /anagrams
- This route will accept the query url:
  - '?words=word1,word2,word3,…’
- The endpoint will return an array of arrays of anagrams, as explained below.

**Submitting your solution:**

- Create a github repro with the source code for the project.
- Email that github link back to the email address you received this challenge from.

**Definitions:**

- Anagram: a word formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

**Functional Requirements:**

- Use Node and express for the webserver.
- Implement the route:
  - GET /anagrams/
- The endpoint will receive a list of words, through the query url ‘?words=’. It receives the words as a comma separated list:
  - ?words=word,words,sword
- The input words will contain only letters, no spaces, **but may contain both upper and lower case letters. (see below)**
- The endpoint should return a JSON object with the property “anagrams”, which would be an array, each item in the array being an array of strings of anagrams.
  - { "anagrams": [["words", "sword"], ["word"]] }
- All words of the input should be included in the output, if a word has no anagram matches, then it remains in an array by itself.
- If the endpoint is called with no words, the “anagrams” property will be empty array.
- The order of the output does not matter.

**Create 2 Versions of the anagrams endpoint:**

- /v1/anagrams
- /v2/anagrams

**Version 1:**

- Converts all input to lower case, and the output is all lower case.

**Version 2:**

- Does not modify the input and anagrams are case sensitive.

**Example of /v1/anagrams:**

- Input:

  - /v1/anagrams?words=ate,bar,loop,Pool,TEA,pet,BAR

- Output: **Note:** on v1 all input is converted to lowercase
  - { “anagrams”: [["ate", "tea"], ["loop", "pool"], ["bar", "bar"], ["pet"]] }

**Example of /v2/anagrams:**

- Input:

  - /v2/anagrams?words=pot,Top,opt,owl,Low,owL

- Output: **Note:** the input words are not modified, and anagrams are case sensitive.
  - { “anagrams”: [["pot", "opt"], ["Top"], ["owl"], ["Low", "owL"]] }