
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('users').insert([
        {username: 'ali', password: '1234'},
        {username: 'sam', password: '4321'}
      
      ]);

};
