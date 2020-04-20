exports.up = function(knex) {
    return knex.schema.createTable('vecancies', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('goal').notNullable();
        table.string('description').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vecancies');
};
