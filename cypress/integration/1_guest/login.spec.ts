import { dummyToken } from "../../support/commands";

context("로그인 페이지", () => {
  beforeEach(() => {
    cy.server();
    cy.clearCookies();
    cy.logout();
    cy.visit("/login");
  });
  afterEach(() => {
    cy.logout();
  });

  // it("로그인 실패 시 에러 메시지 표시", () => {
  //   cy.intercept("POST", "/auth/login", {
  //     status: 400,
  //     body: {
  //       success: false,
  //       code: 400,
  //       data: "비밀번호가 올바르지 않습니다.",
  //     },
  //   }).as("로그인 실패");
  //
  //   cy.get("[data-testid=email-inp]").type("test");
  //   cy.get("[data-testid=password-inp]").type("test");
  //
  //   cy.get("[data-testid=login]").click();
  //
  //   cy.get("[data-testid=login-error]").contains(
  //     "비밀번호가 올바르지 않습니다.",
  //   );
  //
  //   cy.checkPath("/");
  // });

  it("로그인 성공 시 메인으로 리다이렉트", () => {
    cy.intercept("POST", "/auth/login", {
      statusCode: 200,
      body: {
        accessToken: dummyToken,
      },
    }).as("로그인 성공");

    cy.get("[data-testid=email-inp]").type("test");
    cy.get("[data-testid=password-inp]").type("test");
    cy.get("[data-testid=login]").click();

    cy.checkPath("/");
  });
});
