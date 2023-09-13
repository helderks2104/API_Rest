const bcrypt = require('bcryptjs')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'jhonzi123nho@email.com',
        created_at: new Date(),
        updated_at: new Date(),
        password_hash: await bcrypt.hash('123456', 8),
      },
    ], {});
  },
};
