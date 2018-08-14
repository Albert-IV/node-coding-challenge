/**
 * Goal: Take the inputs and convert them to outputs.
 */

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

// Endpoint to ensure server is responding
app.get('/', (req, res) => res.send('Running!'));

/**
 * Input:
 *  {
 *    "operation": "<OPERATION_NAME>",
 *    "records": [
 *      { "id": 1, "name": "Ezequiel" },
 *      { "id": 2, "name": "Phillip" },
 *      { "id": 3, "name": "Amos" }
 *    ]
 *  }
 *
 * Return (JSON):
 *  {
 *    "operation": "<OPERATION_NAME>",
 *    "records": [
 *      { "id": 1, "<OPERATION_NAME>": "<PROCESSED NAME>" },
 *      { "id": 2, "<OPERATION_NAME>": "<PROCESSED NAME>" },
 *      { "id": 3, "<OPERATION_NAME>": "<PROCESSED NAME>" }
 *    ]
 *  }
 *
 *  - Valid Operations:
 *    * `reverse` - Reverse the name field
 *      "Robert" => "treboR"
 *
 *    * `remove-vowels` - Remove the pA, E, I, O, and U characters from the name field
 *      "Robert" => "Rbrt"
 *
 *    * `remove-consonants` - Remove all characters that are not A, E, I, O, and U from the name field
 *      "Robert" => "oe"
 *
 *    * `spaced-out` - Add spaces between all characters in the name field and uppercase all characters
 *      "Robert" => "R O B E R T"
 *
 *  - Validate the `id` field exists, returning an error the field is missing.
 *  - Validate the operation submitted is on the list, returning an error if the operation does not exist.
 *
 * Example Input / Output
 *  {
 *    "operation": "reverse",
 *    "records": [
 *      { "id": 200, "name": "Ezequiel" },
 *      { "id": 300, "name": "Phillip" },
 *      { "id": 400, "name": "Amos" }
 *    ]
 *  }
 *
 * Return (JSON):
 *  {
 *    "operation": "reverse",
 *    "records": [
 *      { "id": 200, "reverse": "leiuqezE" },
 *      { "id": 300, "reverse": "pillihP" },
 *      { "id": 400, "reverse": "somA" }
 *    ]
 *  }
 */

app.post('/name-processor', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})