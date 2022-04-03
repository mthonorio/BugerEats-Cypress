import SignupPage from "../pages/SignupPage";

describe("cadastro", () => {
  it("Usuário deve se tornar um entregador", () => {
    //Super Variavel do tipo Obj JS que recebe valores p/ os testes
    var entregador = {
      name: "Matheus Honório",
      cpf: "96200598A@A88",
      email: "matheushonorio@bugereats.com",
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

    var signup = new SignupPage();

    signup.go();
    signup.fillForm(entregador);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

    signup.modalContentShouldBe(expectedMessage);
  });

  it("CPF incorreto", () => {
    //Super Variavel do tipo Obj JS que recebe valores p/ os testes
    var entregador = {
      name: "Matheus Honório",
      cpf: "96200598A@A88",
      email: "matheushonorio@bugereats.com",
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

    var signup = new SignupPage();

    signup.go();
    signup.fillForm(entregador);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });
});
