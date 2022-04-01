//Nome da suite de teste
describe("home page", () => {
  //Nome do caso de testes
  it("app deve estar online", () => {
    //Resolução do teste
    cy.viewport(1440, 900);
    //Site para o qual o cypress ira visitar
    cy.visit("https://buger-eats.vercel.app");
    //Busca o campo e valida o texto
    cy.get("#page-home div main h1").should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );
  });
});
