context("스터디 참여 신청 페이지", () => {
  beforeEach(() => {
    cy.server();

    cy.intercept("/study?id=2", {
      fixture: "study.json",
    }).as("getStudyDetail");
    cy.intercept("POST", "/study/apply", {
      success: true,
      code: 201,
      data: "참여 신청을 완료했습니다.",
    });

    cy.login();

    cy.visit("/study/apply/2");
    cy.wait("@getStudyDetail");
  });

  it("참여 스터디 부분에 참여할 스터디의 제목이 채워져 있다.", () => {
    cy.checkPath("/study/apply/2");

    cy.get("[data-testid=study-title-input]")
      .invoke("val", "test title")
      .should("be.disabled");
  });

  it("참여 신청이 완료되면 팝업이 표시된다.", () => {
    cy.intercept("POST", "/study/apply", {
      success: true,
      code: 201,
      data: "참여 신청을 완료했습니다.",
    });
    cy.get("[data-testid=comment-textarea]").type("신청합니다.");
    cy.get("[data-testid=submit-apply-btn]").click();

    cy.get("[data-testid=modal]").should("be.visible");
  });

  it("팝업의 [스터디 관리로 이동] 버튼을 누르면 스터디 관리 페이지로 이동한다.", () => {
    cy.get("[data-testid=comment-textarea]").type("신청합니다.");
    cy.get("[data-testid=submit-apply-btn]").click();

    cy.get("[data-testid=modal]").should("be.visible");
    cy.get("[data-testid=go-manage-btn]").click();
    cy.checkPath("/study/manage");
  });

  it("팝업의 [글 목록으로] 버튼을 누르면 메인 페이지로 이동한다.", () => {
    cy.intercept("/page?page=*", { fixture: "studyList.json" }).as(
      "getStudyList",
    );
    cy.intercept("/category?point=true", {
      fixture: "category.json",
    }).as("getCategoryList");

    cy.get("[data-testid=comment-textarea]").type("신청합니다.");
    cy.get("[data-testid=submit-apply-btn]").click();

    cy.get("[data-testid=modal]").should("be.visible");
    cy.get("[data-testid=go-list-btn]").click();
    cy.checkPath("/");
  });
});
