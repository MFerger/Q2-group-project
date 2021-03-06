exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('email');
    table.string('password');
    table.string('phone');
    table.string('portrait_link');
    table.string('address_1');
    table.string('address_2');
    table.string('city');
    table.string('state');
    table.integer('zip_code');
    table.boolean('admin');
    table.boolean('verified');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
