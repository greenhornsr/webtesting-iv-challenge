
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {avatarname: 'monkey123'},
        {avatarname: 'monstrocity'},
        {avatarname: 'brooklyn99'},
      ]);
    });
};
