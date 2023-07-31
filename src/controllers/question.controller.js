import questionsSchema from "../models/questionSchema.js";
import questions, {answers} from '../database/data.js'

export async function getQuestions(req, res){
    try {
        const allQuestions = await questionsSchema.find()
        res.status(200).send(allQuestions)
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

export async function insertQuestion(req, res){
    try {
        await questionsSchema.create({questions, answers})
        res.status(200).send("Questions successfully added!")
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

export async function dropQuestion(req, res){
    try {
        await questionsSchema.deleteMany()
        res.status(200).send("Questions successfully deleted!")
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}