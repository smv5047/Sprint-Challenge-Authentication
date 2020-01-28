const supertest = require("supertest")
const server = require("./api/server")

const db = require('./database/dbConfig')

beforeEach(async () => {
    await db.seed.run()
  })

test("register route without proper un or pw", async() => {
    const res = await supertest(server).post("/api/auth/register")
   
    //does it return the expected status code
    expect(res.status).toBe(401)
    //does it return expected data format
    expect(res.type).toBe("application/json")
    //does it return the expected data
    expect(res.body.message).toBe("Please include a username and password")
    console.log(res)
})

test("register route used properly", async() => {
    const res = await supertest(server).post("/api/auth/register")
    .send({ username: "Steven", password: "thebestpassword" })
    expect(res.body.username).toBe("Steven")
    expect(res.status).toBe(201)
})

test("login properly", async() => {
    const res = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "test1", password: "test1" })
    expect(res.status).toBe(200)
})

test("login improperly", async() => {
    const res = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "test2", password: "test1" })
    expect(res.status).toBe(401)
})
