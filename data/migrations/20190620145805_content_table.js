
exports.up = function(knex, Promise) {
    return knex.schema.createTable('content', function(table){
        table.increments()

        table
        .string('avatarname', 128)
        .unique()
        .notNullable()

        table
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('content')
};
