import signup from "../pages/SignupPage";

describe("cadastro", () => {
  beforeEach(function () {
    cy.fixture("deliver").then((d) => {
      this.deliver = d;
    });
  });

  it("Usuário deve se tornar um entregador", function () {
    signup.go();
    signup.fillForm(this.deliver.signup);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

    signup.modalContentShouldBe(expectedMessage);
  });

  it("CPF incorreto", function () {
    signup.go();
    signup.fillForm(this.deliver.cpf_inv);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("Email incorreto", function () {
    signup.go();
    signup.fillForm(this.deliver.email_inv);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });
});
