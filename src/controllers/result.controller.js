import resultSchema from "../models/resultSchema.js";

export async function getResult(req, res){
    try {
        const result = await resultSchema.find()
        res.status(200).send(result)
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

export async function storeResult(req, res){
    try {
        const {username, result, attempts, points, achived} = req.body;
        if(!username && !result) throw new Error("Data is not provided!")

        const data = await resultSchema.create({username, result, attempts, points, achived})
        res.status(200).send(data)
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

export async function dropResult(req, res){
    try {
        await resultSchema.deleteMany()
        res.status(200).send("Results successfully deleted!")
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}