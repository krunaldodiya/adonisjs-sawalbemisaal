import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Language from 'App/Models/Language'

export default class LanguagesController {
  public async languages({ response }: HttpContextContract) {
    const languages = await Language.all()
    return response.ok({ languages })
  }
}
