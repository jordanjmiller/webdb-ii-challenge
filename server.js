const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());



// SELECT using Knex
// In Knex, the equivalent of SELECT * FROM users is:
// db.select('*').from('users');
server.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        console.log(cars);
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving cars'});
    })
});

// INSERT using Knex
// In Knex, the equivalent of INSERT INTO users (name, age) VALUES ('Eva', 32) is:
// db('users').insert({ name: 'Eva', age: 32 });
//The insert method in Knex will resolve to an array containing the newly created id for that user like so: [3].
server.post('/add', (req, res) => {
    db('cars').insert(req.body)
    .then(car => {
        console.log(car);
        db('cars').where({ id: car[0] }) //where id: x
        .then(newCar => {
            console.log(newCar);
            if (newCar.length > 0){
                res.status(201).json({message: `Car with id: ${car[0]} created `, newCar: newCar[0]});
            }
            else{
                res.status(404).json({message: `Car with id: ${car} not found `});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `Error retrieving new car: ${err}`});
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: `Error adding car: ${err}`});
    })
});













const PORT = process.env.PORT || 4001;

server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;

// // - The critical information for each car is the VIN, make, model, and mileage.
// // - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

// exports.up = function(knex) {
//     // don't forget the return statement
//     return knex.schema.createTable('cars', tbl => {
//     // creates a primary key called id
//     tbl.increments();
//     // creates a text field called name which is both required and unique
//     // tbl.text('name', 128).unique().notNullable();
//     // creates a numeric field called budget which is required
//     // tbl.decimal('budget').notNullable();
//     tbl.string('VIN').notNullable();
//     tbl.string('Make', 128).notNullable();
//     tbl.string('Model', 128).notNullable();
//     tbl.integer('Mileage', 128).notNullable();
//     tbl.string('Transmission', 128)();
//     tbl.string('Title', 128)();
//     });
// };

// exports.down = function(knex) {
//     // drops the entire table
//     return knex.schema.dropTableIfExists('cars');
// };


// // We can generate a new migration with the following command:

// // knex migrate:make [migration-name]

// // If we needed to create an accounts table, we might run:

// // knex migrate:make create-accounts

// // Note that inside data/migrations/ a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, do not edit migration names.

// // The migration file should have both an up and a down function. Within the up function, we write the ended database changes. Within the down function, we write the code to undo the up functions. This allows us to undo any changes made to the schema if necessary.

// // exports.up = function(knex, Promise) {
// //   // don't forget the return statement
// //   return knex.schema.createTable('accounts', tbl => {
// //     // creates a primary key called id
// //     tbl.increments();
// //     // creates a text field called name which is both required and unique
// //     tbl.text('name', 128).unique().notNullable();
// //     // creates a numeric field called budget which is required
// //     tbl.decimal('budget').notNullable();
// //   });
// // };

// // exports.down = function(knex, Promise) {
// //   // drops the entire table
// //   return knex.schema.dropTableIfExists('accounts');
// // };