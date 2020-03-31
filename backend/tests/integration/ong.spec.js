const request = require("supertest")
const app = require("../../src/app")
const connection = require("../../src/database/connection")

describe('ONG',()=>{

    beforeEach(async ()=>{ 
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async ()=> {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        // .set('Authorization', 'f9ef36ce')
        .send({
            name: "Safe Ong",
            email: "email@email.com",
            whatsapp: "1999999999",
            city: "Santa Cruz da Conceição",
            uf:"SP"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})