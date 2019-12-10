// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database_file.db3'
    },
      useNullAsDefault: true

  },

};

// npx knex init
// This command will generate a file in your root folder called knexfile.js. It will be auto populated with three config objects, based on different environments. We can delete all except for the development object.

// Copy
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   }

// };
// We’ll need to update the location (or desired location) of the database as well as add the useNullAsDefault option. The latter option prevents crashes when working with sqlite3.

// Copy
// module.exports = {

//   development: {
//     // our DBMS driver
//     client: 'sqlite3',
//     // the location of our db
//     connection: {
//       filename: './data/database_file.db3',
//     },
//     // necessary when using sqlite3
//     useNullAsDefault: true
//   }

// };