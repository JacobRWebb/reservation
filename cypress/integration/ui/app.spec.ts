// Basic test to run a initial check
describe("Testing", () => {
  it("should be true", () => {
    cy.visit("/");
    expect(true).to.equal(true);
  });
});
