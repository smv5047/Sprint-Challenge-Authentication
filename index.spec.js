const supertest = require("supertest")
const server = require("./index")

test("register route", async() => {
    const res = await supertest(server).post("/api/auth/register")
    //does it return the expected status code
    //does it return expected data format
    //does it return the expected data
    console.log(res)
})

test("login route", async() => {
    const res = await supertest(server).post("/api/auth/login")
    //does it return the expected status code
    //does it return expected data format
    //does it return the expected data
    console.log(res)
})

test("jokes route", async() => {
    const res = await supertest(server).get("/api/jokes/")
    //does it return the expected status code
    //does it return expected data format
    //does it return the expected data
    console.log(res)
})