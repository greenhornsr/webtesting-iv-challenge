const request = require('supertest');
const router = require('./routes');

    describe('/api/dbcontent', () => {
        const endpoint = '/api/dbcontent'
        it('responds with 200', () => {
            return request(router)
            .get(endpoint)
            .expect(200)
        })
    });