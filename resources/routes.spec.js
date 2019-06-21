const request = require('supertest');

const db = require('../data/dbConfig');

// use server instead of router because supertest requires a server, supertest can't use the Route method of express
const server = require('../api/server');

    describe('GET @ endpoint /api/dbcontent', () => {
        const endpoint = '/api/dbcontent';

        beforeEach(async () => {
            await db('content').truncate();
        });

        it('responds with 404, a message and success false status if database is empty.', () => {
            return request(server)
            .get(endpoint)
            .then(res => {
                expect(res.status).toBe(404)
                expect(res.body).toEqual({"message": "Sorry, no contents atm!", "success": false})
            })
        });
        it('response content-type is json', () => {
            return request(server)
            .get(endpoint)
            .expect('Content-Type', /json/i)
        });

        // it('respond with object that includes success: true', () => {
        //     return request(server)
        //     .get(endpoint)
        //     .then(res => {
        //         expect(res.body).toEqual(/success: true/i)
        //     })
        // });

    });