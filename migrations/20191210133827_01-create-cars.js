// - The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

exports.up = function(knex) {
    // don't forget the return statement
    return knex.schema.createTable('cars', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    // tbl.text('name', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    // tbl.decimal('budget').notNullable();
    tbl.string('VIN').notNullable();
    tbl.string('Make', 128).notNullable();
    tbl.string('Model', 128).notNullable();
    tbl.integer('Mileage', 128).notNullable();
    tbl.string('Transmission', 128);
    tbl.string('Title', 128);
    });
};

exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists('cars');
};


// We can generate a new migration with the following command:

// knex migrate:make [migration-name]

// If we needed to create an accounts table, we might run:

// knex migrate:make create-accounts

// Note that inside data/migrations/ a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, do not edit migration names.

// The migration file should have both an up and a down function. Within the up function, we write the ended database changes. Within the down function, we write the code to undo the up functions. This allows us to undo any changes made to the schema if necessary.

// exports.up = function(knex, Promise) {
//   // don't forget the return statement
//   return knex.schema.createTable('accounts', tbl => {
//     // creates a primary key called id
//     tbl.increments();
//     // creates a text field called name which is both required and unique
//     tbl.text('name', 128).unique().notNullable();
//     // creates a numeric field called budget which is required
//     tbl.decimal('budget').notNullable();
//   });
// };

// exports.down = function(knex, Promise) {
//   // drops the entire table
//   return knex.schema.dropTableIfExists('accounts');
// };