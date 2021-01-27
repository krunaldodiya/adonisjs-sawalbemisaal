import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {
  public async register({ request, response }: HttpContextContract) {
    const validations = await schema.create({
      name: schema.string({}, [rules.minLength(3)]),
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      username: schema.string({}, [
        rules.unique({ table: 'users', column: 'email' }),
        rules.minLength(4),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
    })

    const data = await request.validate({
      schema: validations,
    })

    const user = await User.create(data)

    return response.created({ user })
  }

  public async login({ response, auth }: HttpContextContract) {
    const user = await User.query().where('email', 'kunal.dodiya1@gmail.com').firstOrFail()

    const token = await auth.loginViaId(user.id)

    return response.created(token.toJSON())
  }

  public async avatar({ request, response }: HttpContextContract) {
    const avatar = request.file('avatar')
    if (!avatar) {
      return
    }

    avatar.move(Application.makePath('s3'))

    return response.ok({ avatar })
  }
}
