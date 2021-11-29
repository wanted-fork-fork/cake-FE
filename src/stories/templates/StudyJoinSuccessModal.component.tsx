import { Button } from "@src/components/atoms/Button";
import Link from "next/link";
import PopupComponent from "@src/components/organs/Popup.component";

const Bottom = () => (
  <div>
    <Link href="/study/manage">
      <a>
        <Button
          data-testid="go-manage-btn"
          color="point"
          fontSize="small"
          height="48px"
          mb="10px"
        >
          스터디 관리로 이동
        </Button>
      </a>
    </Link>{" "}
    <Link href="/">
      <a>
        <Button
          data-testid="go-list-btn"
          color="white"
          fontSize="small"
          filled={false}
          height="48px"
        >
          글 목록으로
        </Button>
      </a>
    </Link>
  </div>
);

function StudyJoinSuccessModalComponent() {
  return (
    <PopupComponent
      bottom={<Bottom />}
      title="스터디 참여 신청 완료!"
      description={
        <div>
          신청 내역 및 스터디 선정 여부는
          <br />
          스터디 관리에서 확인하세요!
        </div>
      }
    />
  );
}

export default StudyJoinSuccessModalComponent;
