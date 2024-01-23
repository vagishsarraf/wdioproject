let request = require("supertest")
let reporter = require("../helper/reporter")

async function GET(testid, baseURL, endpoint, authToken, queryParam) {
    baseURL = baseURL.trim();
    endpoint  = endpoint.trim();
    reporter.addStep(testid,"info", `Making a GET call to ${endpoint}`)
    try {
        return await request(baseURL).
                    get(endpoint).
                    query(queryParam).
                    auth(authToken, { type: 'bearer' }).
                    set("Content-Type", "application/json").
                    set("Accept", "application/json")
        
    } catch (error) {
        error.message = `GET Call request Failed`
    }
}

async function POST(testid, baseURL, endpoint, authToken, queryParam, payload) {
    baseURL = baseURL.trim()
    endpoint =  endpoint.trim()
    reporter.addStep(testid, "info", `Making a POST call to ${endpoint}`)

    try {
        return await request(baseURL)
                    .post(endpoint)
                    .auth(authToken, { type: 'bearer' })
                    .set("Content-Type", "application/json")
                    .set("Accept", "application/json")
                    .send(payload)
    } catch (error) {
        error.message = `Error making a POST call to ${endpoint}, ${error}`
    }
    
}

export default {GET, POST}