import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class QuizRankings extends BaseSchema {
  protected tableName = 'quiz_rankings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').index().primary().unique()

      table.string('period', 255).notNullable()
      table.decimal('prize', 8, 2).notNullable()

      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
