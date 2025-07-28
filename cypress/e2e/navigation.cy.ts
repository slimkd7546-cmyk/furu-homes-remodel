describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to all main pages", () => {
    // Test home page
    cy.contains("Transforming Houses Into Dream Homes");

    // Test about page
    cy.get("nav").contains("About").click();
    cy.url().should("include", "/about");
    cy.contains("About Furu Holmes LLC");

    // Test services page
    cy.get("nav").contains("Services").click();
    cy.url().should("include", "/services");
    cy.contains("Our Services");

    // Test portfolio page
    cy.get("nav").contains("Portfolio").click();
    cy.url().should("include", "/portfolio");
    cy.contains("Our Portfolio");

    // Test testimonials page
    cy.get("nav").contains("Testimonials").click();
    cy.url().should("include", "/testimonials");
    cy.contains("Client Stories");

    // Test blog page
    cy.get("nav").contains("Blog").click();
    cy.url().should("include", "/blog");
    cy.contains("Remodeling Insights");

    // Test contact page
    cy.get("nav").contains("Contact").click();
    cy.url().should("include", "/contact");
    cy.contains("Contact Us");
  });

  it("should have working mobile navigation", () => {
    cy.viewport("iphone-6");

    // Open mobile menu
    cy.get('[aria-label="Open navigation menu"]').click();
    cy.get("#mobile-menu").should("be.visible");

    // Test mobile navigation
    cy.get("#mobile-menu").contains("About").click();
    cy.url().should("include", "/about");
  });

  it("should have accessible navigation", () => {
    // Test ARIA labels
    cy.get('[aria-label="Main navigation"]').should("exist");
    cy.get('[role="menubar"]').should("exist");

    // Test keyboard navigation
    cy.get("nav a").first().focus();
    cy.focused().should("have.attr", "tabindex", "0");
  });
});
