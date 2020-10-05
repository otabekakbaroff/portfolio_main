exports.up = function(knex) {
    return knex.schema.createTable('messages', table => {

        table.increments();
        
        table.string('name',255).notNullable()

        table.string('email', 255).notNullable()

        table.string('subject',255)

        table.string('message').notNullable()

    });
}
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
};
