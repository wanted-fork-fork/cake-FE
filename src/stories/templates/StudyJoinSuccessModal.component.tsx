import { Button } from "@src/components/atoms/Button";
import PopupComponent from "@src/components/organs/Popup.component";

const bottom = (
  <div>
    <Button color="point" fontSize="small" height="48px" mb="10px">
      스터디 관리로 이동
    </Button>
    <Button color="white" fontSize="small" filled={false} height="48px">
      글 목록으로
    </Button>
  </div>
);
const contentPadding = { padding: "15px 0 10px 0" };
const content = (
  <div style={contentPadding}>
    <h3>스터디 참여 신청 완료!</h3>
    <p>
      신청 내역 및 스터디 선정 여부는
      <br />
      스터디 관리에서 확인하세요!
    </p>
  </div>
);

function StudyJoinSuccessModalComponent() {
  return <PopupComponent bottom={bottom} content={content} />;
}

export default StudyJoinSuccessModalComponent;
