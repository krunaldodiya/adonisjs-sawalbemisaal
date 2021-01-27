import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuizRanking from 'App/Models/QuizRanking'

export default class QuizRankingsController {
  public async getRankings({ response }: HttpContextContract) {
    const quizRankings = await QuizRanking.query().preload('user').paginate(1)

    return response.status(200).json({ quiz_rankings: quizRankings })
  }
}
