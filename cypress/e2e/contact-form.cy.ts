describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should submit contact form successfully", () => {
    // Fill out the form
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#phone").type("555-123-4567");
    cy.get("#message").type(
      "I would like to discuss a kitchen renovation project.",
    );

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check for success message
    cy.contains("Message sent successfully!").should("be.visible");
  });

  it("should show validation errors for required fields", () => {
    // Try to submit empty form
    cy.get('button[type="submit"]').click();

    // Check for validation message
    cy.contains("Please fill in required fields").should("be.visible");
  });

  it("should have accessible form elements", () => {
    // Check for proper labels
    cy.get('label[for="name"]').should("exist");
    cy.get('label[for="email"]').should("exist");
    cy.get('label[for="message"]').should("exist");

    // Check ARIA attributes
    cy.get('[role="form"]').should("exist");
  });
});
