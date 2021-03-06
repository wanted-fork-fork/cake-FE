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
import { FolderPathType } from "@src/constant/enum.constant";
import { Checkbox } from "antd";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import PinIcon from "@src/components/icon/Pin.icon";
import CafeSelectMapComponent from "@src/components/organs/CafeSelectMap.component";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

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
  padding-bottom: 8px;
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
  errors,
  onChange,
  allowDatepicker,
  toggleUseDatepicker,
  startDate,
  onChangeStartDate,
  endDate,
  onChangeEndDate,
  selectedMine,
  setSelectedMine,
  selectedYours,
  setSelectedYours,
  selectedCafe,
  setSelectedCafe,
  givePoint,
  onChangeGivePoint,
  takePoint,
  onChangeTakePoint,
  uploaded,
  setUploaded,
}) {
  const studyTypeList = useMemo(() => getStudyTypeList(), []);
  const [mineVisible, setMineVisible, setMineInvisible] = useVisibleHook(false);
  const [yoursVisible, setYourVisible, setYourInvisible] =
    useVisibleHook(false);
  const [mapVisible, setMapVisible, setMapInvisible] = useVisibleHook(false);

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
  const myCategoryDom = useMemo(() => {
    if (selectedMine.length === 0) return "Give";
    if (givePoint)
      return <Category key="give-point">{givePoint} ?????????</Category>;
    return selectedMine.map((x) => <Category key={x.id}>{x.name}</Category>);
  }, [givePoint, selectedMine]);

  const yourCategoryDom = useMemo(() => {
    if (selectedYours.length === 0) return "Take";
    if (takePoint)
      return <Category key="take-point">{takePoint} ?????????</Category>;
    return selectedYours.map((x) => <Category key={x.id}>{x.name}</Category>);
  }, [selectedYours, takePoint]);

  return (
    <PageWrapperComponent
      title="????????? ??????"
      button={
        <Button
          onClick={onSubmit}
          width="100px"
          height="44px"
          color="primary"
          fontSize="small"
        >
          ????????? ??????
        </Button>
      }
    >
      <FormWrapper>
        <LightUnderlineInput
          name="title"
          placeholder="????????? ??????"
          fontSize="small"
          onChange={onChange}
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
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
            title="?????? ?????? ????????? ??????????????????."
            selectedList={selectedMine}
            setSelectedList={setSelectedMine}
            buttonTextOnEmpty="?????? ?????????"
            onClose={setMineInvisible}
            visible={mineVisible}
            showPoint
            pointValue={givePoint}
            onChangePointValue={onChangeGivePoint}
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
            title="?????? ????????? ????????? ?????? ????????? ??????????????????."
            selectedList={selectedYours}
            setSelectedList={setSelectedYours}
            buttonTextOnEmpty="??? ?????????!"
            onClose={setYourInvisible}
            visible={yoursVisible}
            showPoint
            pointValue={takePoint}
            onChangePointValue={onChangeTakePoint}
          />
        </CategoryWrapper>
        <CategoryWrapper>
          <WithPrefixIcon>
            <CalendarIcon color={theme.color.gray3} />
            <DatePicker
              disabled={!allowDatepicker}
              suffixIcon={null}
              placeholder="????????? ?????????"
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
              disabled={!allowDatepicker}
              suffixIcon={null}
              placeholder="????????? ?????????"
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
        <WithUnderline>
          <Checkbox checked={!allowDatepicker} onChange={toggleUseDatepicker}>
            ???????????? ?????? ??????
          </Checkbox>
        </WithUnderline>
        <InputWithSuffixComponent
          input={
            <InputLikeButton
              type="button"
              color="gray"
              selected={selectedCafe !== null}
              fontSize="small"
              onClick={setMapVisible}
              height="43px"
            >
              {selectedCafe ? selectedCafe.place_name : "??????"}
            </InputLikeButton>
          }
          suffix={<PinIcon />}
        />
        {mapVisible && (
          <CafeSelectMapComponent
            onClickOkay={setSelectedCafe}
            setInvisible={setMapInvisible}
          />
        )}
        <LightUnderlineInput
          name="chatRoom"
          placeholder="??????????????????"
          fontSize="small"
          onChange={onChange}
        />
        {errors.chatRoom && <ErrorMessage>{errors.chatRoom}</ErrorMessage>}
        <InputWithSuffixComponent
          input={
            <LightUnderlineInput
              name="roomPwd"
              placeholder="???????????? ????????????"
              fontSize="small"
              onChange={onChange}
            />
          }
          suffix={
            values.roomPwd.length > 0 && (
              <ErrorMessage>
                ??????????????? ?????? ?????????????????? ???????????????
              </ErrorMessage>
            )
          }
        />
      </FormWrapper>
      <BoldDivider my="20px" />
      <FormWrapper mb="15px">
        <Textarea
          fontSize="small"
          name="content"
          placeholder="?????? ??????, ?????? ??? ?????? ????????? ??????????????????."
          rows={10}
          onChange={onChange}
        />
      </FormWrapper>
      <FormWrapper>
        <MultipleImageUploadComponent
          uploaded={uploaded}
          setUploaded={setUploaded}
          folder={FolderPathType.STUDY}
          messageOnEmpty="????????? ????????? ????????? ????????? ????????????!"
        />
      </FormWrapper>
    </PageWrapperComponent>
  );
}

export default StudyCreateTemplate;
