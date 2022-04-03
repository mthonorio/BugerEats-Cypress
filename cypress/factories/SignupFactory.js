var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      wpp: "839123456789",
      address: {
        postalcode: "58062306",
        street: "Rua Tatu Peludo",
        number: "111",
        district: "Paratibe",
        city_state: "João Pessoa/PB",
        details: "Apt 304",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };
    return data;
  },
};
