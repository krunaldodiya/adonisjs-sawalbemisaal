import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Languages extends BaseSchema {
  protected tableName = 'languages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').index().primary().unique()

      table.string('name', 255).notNullable()
      table.string('nickname', 255).notNullable()

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
