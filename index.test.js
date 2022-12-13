
const supertest = require('supertest')
const assert = require('assert')
const app = require('./index')

describe('GET /', () => {
    it('should return 200 status code',async()=>{
        const res = await supertest(app).get('/')
        assert.equal(res.statusCode,200)
    })
 })