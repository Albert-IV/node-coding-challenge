const request = require('request')
const assert = require('assert')

const endpoint = 'http://localhost:8080/name-processor';

describe('Integration Tests', () => {

  describe('Validations', (done) => {
    it('should return an error if there are no ID fields present in the records.', (done) => {

      request.post({
        uri: endpoint,
        json: {
          operation: 'reverse',
          records: [
            { name: 'Phil' }, { name: 'John' }, { name: 'Steve' }
          ]
        }
      }, (e, resp, body) => {
        assert(!e);
        assert.notEqual(resp.statusCode, 200)

        done();
      });

    })

    it('should return an error if there is no operation supplied to the endpoint', (done) => {
      request.post({
        uri: endpoint,
        json: {
          records: [
            { id: 1, name: 'Phil' }, { id: 2, name: 'John' }, { id: 3, name: 'Steve' }
          ]
        }
      }, (e, resp, body) => {
        assert(!e);
        assert.notEqual(resp.statusCode, 200)

        done();
      });
    });

  })

  describe('reverse', () => {
    const inputData = {
      operation: 'reverse',
      records: [
        { id: 2, name: 'Phil' }, { id: 3, name: 'John' }, { id: 0, name: 'Steve' }
      ]
    }

    it('should return the records in the correct order', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].id, inputData.records[0].id)
        assert.equal(body.records[1].id, inputData.records[1].id)
        assert.equal(body.records[2].id, inputData.records[2].id)

        done();
      });
    })

    it('should reverse the names', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].reverse, 'lihP')
        assert.equal(body.records[1].reverse, 'nhoJ')
        assert.equal(body.records[2].reverse, 'evetS')

        done();
      });
    })

  })

  describe('remove-vowels', () => {
    const inputData = {
      operation: 'remove-vowels',
      records: [
        { id: 2, name: 'Phil' }, { id: 3, name: 'John' }, { id: 0, name: 'Steve' }
      ]
    }

    it('should return it in the correct order', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].id, inputData.records[0].id)
        assert.equal(body.records[1].id, inputData.records[1].id)
        assert.equal(body.records[2].id, inputData.records[2].id)

        done();
      });
    })

    it('should remove all vowels', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].reverse, 'Phl')
        assert.equal(body.records[1].reverse, 'Jhn')
        assert.equal(body.records[2].reverse, 'Stv')

        done();
      });
    })

  })

  describe('remove-consonants', () => {
    const inputData = {
      operation: 'remove-consonants',
      records: [
        { id: 2, name: 'Phil' }, { id: 3, name: 'John' }, { id: 0, name: 'Steve' }
      ]
    }

    it('should return it in the correct order', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].id, inputData.records[0].id)
        assert.equal(body.records[1].id, inputData.records[1].id)
        assert.equal(body.records[2].id, inputData.records[2].id)

        done();
      });
    })

    it('should remove all consanants', (done) => {
      request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
        assert(!e);
        assert.equal(resp.statusCode, 200)

        assert.equal(body.records[0].reverse, 'i')
        assert.equal(body.records[1].reverse, 'o')
        assert.equal(body.records[2].reverse, 'ee')

        done();
      });
    })

    describe('spaced-out', () => {
      const inputData = {
        operation: 'spaced-out',
        records: [
          { id: 2, name: 'Phil' }, { id: 3, name: 'John' }, { id: 0, name: 'Steve' }
        ]
      }

      it('should return it in the correct order', (done) => {
        request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
          assert(!e);
          assert.equal(resp.statusCode, 200)

          assert.equal(body.records[0].id, inputData.records[0].id)
          assert.equal(body.records[1].id, inputData.records[1].id)
          assert.equal(body.records[2].id, inputData.records[2].id)

          done();
        });
      })

      it('should have the words   S P A C E D    O U T', (done) => {
        request.post({ uri: endpoint, json: inputData }, (e, resp, body) => {
          assert(!e);
          assert.equal(resp.statusCode, 200)

          assert.equal(body.records[0].reverse, 'P H I L')
          assert.equal(body.records[1].reverse, 'J O H N')
          assert.equal(body.records[2].reverse, 'S T E V E')

          done();
        });
      })

    })

  })

})