const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const correios = require('./schema');

// link from request: http://www.mocky.io/v2/5c8822db320000af133bd6b6

describe('Teste de contrato', () => {
    it('GET', done => {
        request('http://www.mocky.io')
        .get('/v2/5c8822db320000af133bd6b6')
        .expect('Content-type', 'application/json')
        .end((err, res) => {
            if (err) return done(err);
            
            let actual = res.body; 
            
            err = Joi.validate(actual, correios.schemaS(),
                    { abortEarly: false},
                ).error
            
            assert.equal(err, null);
	    done();
        });
    });
});
