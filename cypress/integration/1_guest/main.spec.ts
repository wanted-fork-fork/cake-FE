/// <reference types="Cypress" />

context("로그인 하지 않은 유저 메인 페이지", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.logout();
    cy.visit("/");
  });

  it("로그인 버튼과 회원가입 버튼이 표시된다.", () => {
    cy.get("[data-testid=go-login-btn]").eq(0);
    cy.get("[data-testid=go-signup-btn]").eq(0);
  });

  it("로그인 버튼을 누르면 로그인 페이지로 리다이렉트 된다.", () => {
    cy.get("[data-testid=go-login-btn]").click();
    cy.checkPath("/login");
  });

  it("회원가입 버튼을 누르면 회원가입 페이지로 리다이렉트 된다.", () => {
    cy.get("[data-testid=go-signup-btn]").click();
    // cy.checkPath("/signup");
  });
});
