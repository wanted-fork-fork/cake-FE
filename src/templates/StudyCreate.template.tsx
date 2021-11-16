import { useCallback, useMemo } from "react";
import styled from "styled-components";

// utils
import { getStudyTypeList } from "@src/utils/enum.util";

// components
import CalendarIcon from "@src/components/icon/Calendar.icon";
import { Button, InputLikeButton } from "@src/components/atoms/Button";
import { LightUnderlineInput } from "@src/components/atoms/Input";
import DatePicker from "@src/components/atoms/DatePicker";
import Select from "@src/components/atoms/Select";
import { BoldDivider } from "@src/components/atoms/Divider";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import { Textarea } from "@src/components/atoms/Textarea";

// styles
import theme, { Padding } from "@src/styles/theme";
import { BaseProps, BaseStyleProps, LightUnderline } from "@src/styles/common";
import CategorySelectDrawerComponent from "@src/components/organs/CategorySelectDrawer.component";
import { Category } from "@src/components/atoms/Category";
import useVisibleHook from "@src/hooks/useVisible.hook";
import TradeIcon from "@src/components/icon/Trade.icon";
import dayjs from "dayjs";
import MultipleImageUploadComponent from "@src/components/molecules/MultipleImageUpload.component";

const FormWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  padding: 0 ${Padding.pageX};
  input,
  select {
    margin-top: 5px;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 5px;
`;
const WithUnderline = styled.div`
  ${LightUnderline};
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 0;
  margin-bottom: 5px;
`;

const MidLine = styled.hr`
  border: 1px solid ${theme.color.gray3};
  border-radius: 0;
  width: 15px;
`;

const WithPrefixIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function StudyCreateTemplate({
  onSubmit,
  values,
  onChange,
  startDate,
  onChangeStartDate,
  endDate,
  onChangeEndDate,
  selectedMine,
  setSelectedMine,
  selectedYours,
  setSelectedYours,
  uploaded,
  setUploaded,
}) {
  const studyTypeList = useMemo(() => getStudyTypeList(), []);
  const [mineVisible, setMineVisible, setMineInvisible] = useVisibleHook(false);
  const [yoursVisible, setYourVisible, setYourInvisible] =
    useVisibleHook(false);

  const disabledStart = useCallback(
    (current) => current && current < dayjs().add(-1, "day").endOf("day"),
    [],
  );
  const disabledEnd = useCallback(
    (current) =>
      (current && current < dayjs().add(-1, "day").endOf("day")) ||
      (startDate && current < dayjs(startDate).add(-1, "day").endOf("day")),
    [startDate],
  );
  const myCategoryDom = useMemo(
    () =>
      selectedMine.length === 0
        ? "나의 능력"
        : selectedMine.map((x) => <Category key={x.id}>{x.name}</Category>),
    [selectedMine],
  );

  const yourCategoryDom = useMemo(
    () =>
      selectedYours.length === 0
        ? "너의 능력"
        : selectedYours.map((x) => <Category key={x.id}>{x.name}</Category>),
    [selectedYours],
  );
  return (
    <PageWrapperComponent
      title="스터디 생성"
      button={
        <Button
          onClick={onSubmit}
          width="100px"
          height="44px"
          color="primary"
          fontSize="small"
        >
          게시물 작성
        </Button>
      }
    >
      <FormWrapper>
        <LightUnderlineInput
          name="title"
          placeholder="타이틀 입력"
          fontSize="small"
          onChange={onChange}
        />
        <Select
          name="type"
          selected={values.type}
          shape="light"
          list={studyTypeList}
          idKeyName="key"
          labelKeyName="value"
          onSelect={onChange}
        />
        <CategoryWrapper>
          <InputLikeButton onClick={setMineVisible}>
            {myCategoryDom}
          </InputLikeButton>
          <CategorySelectDrawerComponent
            title="자신 있는 재능을 선택해주세요."
            selectedList={selectedMine}
            setSelectedList={setSelectedMine}
            buttonTextOnEmpty="아직 없어요"
            onClose={setMineInvisible}
            visible={mineVisible}
          />
          <div>
            <TradeIcon
              selectedMine={selectedMine.length}
              selectedYours={selectedYours.length}
            />
          </div>
          <InputLikeButton onClick={setYourVisible}>
            {yourCategoryDom}
          </InputLikeButton>
          <CategorySelectDrawerComponent
            title="관심 있거나 배우고 싶은 주제를 선택해주세요."
            selectedList={selectedYours}
            setSelectedList={setSelectedYours}
            buttonTextOnEmpty="다 좋아요!"
            onClose={setYourInvisible}
            visible={yoursVisible}
          />
        </CategoryWrapper>
        <CategoryWrapper>
          <WithPrefixIcon>
            <CalendarIcon color={theme.color.gray3} />
            <DatePicker
              suffixIcon={null}
              placeholder="스터디 시작일"
              picker="date"
              inputReadOnly
              bordered={false}
              format="YY.MM.DD"
              value={startDate}
              onChange={onChangeStartDate}
              disabledDate={disabledStart}
            />
          </WithPrefixIcon>
          <MidLine />
          <WithPrefixIcon>
            <CalendarIcon color={theme.color.gray3} />
            <DatePicker
              suffixIcon={null}
              placeholder="스터디 종료일"
              picker="date"
              inputReadOnly
              bordered={false}
              format="YY.MM.DD"
              value={endDate}
              onChange={onChangeEndDate}
              disabledDate={disabledEnd}
            />
          </WithPrefixIcon>
        </CategoryWrapper>
        <WithUnderline />
        {/* <InputWithSuffixComponent */}
        {/*  input={ */}
        {/*    <InputLikeButton */}
        {/*      type="button" */}
        {/*      color="gray" */}
        {/*      fontSize="small" */}
        {/*      onClick={null} */}
        {/*    > */}
        {/*      장소 */}
        {/*    </InputLikeButton> */}
        {/*  } */}
        {/*  suffix={<PinIcon />} */}
        {/* /> */}
        <LightUnderlineInput
          name="chatRoom"
          placeholder="오픈채팅링크"
          fontSize="small"
          onChange={onChange}
        />
        <LightUnderlineInput
          name="roomPwd"
          placeholder="오픈채팅 비밀번호"
          fontSize="small"
          onChange={onChange}
        />
      </FormWrapper>
      <BoldDivider my="20px" />
      <FormWrapper mb="15px">
        <Textarea
          fontSize="small"
          name="content"
          placeholder="상세 내용, 일정 및 유의 사항을 입력해주세요."
          rows={10}
          onChange={onChange}
        />
      </FormWrapper>
      <FormWrapper>
        <MultipleImageUploadComponent
          uploaded={uploaded}
          setUploaded={setUploaded}
          messageOnEmpty="강좌와 관련된 사진을 업로드 해주세요!"
        />
      </FormWrapper>
    </PageWrapperComponent>
  );
}

export default StudyCreateTemplate;
