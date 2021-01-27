import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import User from './User'

export default class QuizRanking extends BaseModel {
  @column({ isPrimary: true, prepare: () => uuid() })
  public id: string

  @column()
  public userId: string

  @column()
  public prize: number

  @column()
  public rank: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
