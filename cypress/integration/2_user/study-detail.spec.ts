context("스터디 상세 페이지", () => {
  beforeEach(() => {
    cy.server();

    cy.intercept("/study?id=1", {
      fixture: "appliedStudy.json",
    }).as("getAppliedStudyDetail");
    cy.intercept("/study?id=2", {
      fixture: "study.json",
    }).as("getStudyDetail");
    cy.intercept("/user/mypage?id=1", {
      fixture: "profile.json",
    }).as("getProfile");

    cy.login();
  });

  it("스터디 상세 페이지 접속이 가능하다.", () => {
    cy.visit("/study/1");
    cy.wait("@getAppliedStudyDetail");
    cy.checkPath("/study/1");
  });

  it("신청 불가능한 스터디에서는 참여 신청 버튼이 비활성화 되어 있다.", () => {
    cy.visit("/study/1");
    cy.wait("@getAppliedStudyDetail");

    cy.get("[data-testid=study-apply-btn]").should("be.disabled");

    cy.checkPath("/study/1");
  });

  it("신청 불가능한 스터디에서는 참여 신청 버튼이 비활성화 되어 있다.", () => {
    cy.visit("/study/2");
    cy.wait("@getStudyDetail");

    cy.get("[data-testid=study-apply-btn]").should("not.be.disabled");

    cy.get("[data-testid=study-apply-btn]").click();
    cy.checkPath("/study/apply/2");
  });

  it("프로필을 누르면 다른 사람의 프로필 페이지로 이동된다.", () => {
    cy.visit("/study/2");
    cy.wait("@getStudyDetail");

    cy.get("[data-testid=profile-container]").eq(0).click();

    cy.checkPath("/profile/1");
  });
});
