import SignupFactory from "../factories/SignupFactory";
import SignupPage from "../pages/SignupPage";
import signup from "../pages/SignupPage";

describe("cadastro", () => {
  // beforeEach(function () {
  //   cy.fixture("deliver").then((d) => {
  //     this.deliver = d;
  //   });
  // });

  it("Usuário deve se tornar um entregador", function () {
    var deliver = SignupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

    signup.modalContentShouldBe(expectedMessage);
  });

  it("CPF incorreto", function () {
    var deliver = SignupFactory.deliver();

    deliver.cpf = "00001Ac5436";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("Email incorreto", function () {
    var deliver = SignupFactory.deliver();

    deliver.email = "user.com.br";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  context("Campos obrigatorios", function () {
    const messages = [
      { field: "nome", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "cep", output: "É necessário informar o CEP" },
      { field: "numero", output: "É necessário informar o número do endereço" },
      { field: "metodo_de_entrega", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signup.go();
      signup.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} é obrigatório`, function () {
        SignupPage.alertMessageShouldBe(msg.output);
      });
    });
  });
});
