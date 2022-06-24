"use strict"

const db = require("../connect/mongodb")
const testCol = db.col("common/test.logReq")

module.exports = async (app) => {
    app.get("/", async (req, res) => {
        res.send("Hello. How are your.")
    })
    app.get("/push", async (req, res) => {
        res.send(`push ${new Date()}`)
    })
    app.get("/pull", async (req, res) => {
        const result = await testCol.find({}).sort({ _id: -1 }).limit(20).toArray()
        res.json(result)
    })
}
