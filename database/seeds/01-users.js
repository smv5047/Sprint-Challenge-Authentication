const bcrypt = require("bcryptjs")
const hash = async(password) => await bcrypt.hash(password, 12)

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
        {id: 1, username: 'test1', password: `${await hash('test1')}`},
        {id: 2, username: 'test2', password: `${await hash('test2')}`},
        {id: 3, username: 'test3', password: `${await hash('test3')}`}
      ]);
    ;
};
