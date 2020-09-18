context("sendContactMessage", () => {
  specify("A user can send a contact message", () => {
    // Setup
    cy.server();
    cy.route2("/api/contact", { statusCode: 200 });

    // Act
    cy.visit("/contact");
    cy.findByLabelText(/tu email/i).type("hola@codecoolture.com");
    cy.findByLabelText(/asunto/i).type("Información sobre próximos libros");
    cy.findByLabelText(/mensaje/i).type("Hola, me gustaría obtener más información sobre próximos libros.");
    cy.findByText(/enviar/i).click();

    // Assert
    cy.url().should("eql", Cypress.config().baseUrl + "/contact/success");
    cy.findByText(/tu mensaje ha sido enviado con éxito/i).should("exist");
  });
});
