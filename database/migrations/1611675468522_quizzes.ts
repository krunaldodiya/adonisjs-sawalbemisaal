import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quizzes extends BaseSchema {
  protected tableName = 'quizzes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').index().primary().unique()

      table.string('title', 255).notNullable()

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
