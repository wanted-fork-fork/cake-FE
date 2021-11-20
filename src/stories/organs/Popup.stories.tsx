import PopupComponent from "@src/components/organs/Popup.component";
import { Button } from "@src/components/atoms/Button";
import StudyJoinSuccessModalComponent from "@src/stories/templates/StudyJoinSuccessModal.component";

export default {
  title: "organs/Popup",
  component: PopupComponent,
};

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

const Template = () => (
  <PopupComponent
    bottom={bottom}
    title="스터디 참여 신청 완료!"
    description={
      <p style={{ fontSize: "14px" }}>
        신청 내역 및 스터디 선정 여부는
        <br />
        스터디 관리에서 확인하세요!
      </p>
    }
  />
);

export const Popup = Template.bind({});

export const StudyJoinSuccessModal = () => <StudyJoinSuccessModalComponent />;
