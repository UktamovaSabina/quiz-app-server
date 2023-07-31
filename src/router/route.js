import { Router } from "express";
const router = Router();

import * as questionController from '../controllers/question.controller.js';
import * as resultsController from '../controllers/result.controller.js'

router.route('/questions?')
        .get(questionController.getQuestions)
        .post(questionController.insertQuestion)
        .delete(questionController.dropQuestion)

router.route('/results?')
        .get(resultsController.getResult)
        .post(resultsController.storeResult)
        .delete(resultsController.dropResult)

export default router;