import SignupPageTemplate from "@src/templates/SignupPage.template";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import { CategoryType, SignupStep } from "@src/constant/enum.constant";

const SignupPage = observer(() => {
  const { signupStore, categoryStore } = useStores();

  const [step, setStep] = useState<SignupStep>(SignupStep.SELECT_SCHOOL);

  const selectedUniv = useMemo(
    () =>
      signupStore.univList.find(
        (x) => x.id.toString() === signupStore.form.univ,
      ),
    [signupStore.univList, signupStore.form.univ],
  );

  const isStepCompleted = useMemo(
    () => ({
      [SignupStep.SELECT_SCHOOL]: signupStore.form.univ !== "",
      [SignupStep.CONFIRM_EMAIL]: signupStore.emailConfirmed,
      [SignupStep.PASSWORD_INPUT]: signupStore.form.pwd,
      [SignupStep.DETAILS_INPUT]:
        signupStore.form.univCategory && signupStore.form.nickname,
      [SignupStep.SELECT_GIVE_CATEGORY]: true,
      [SignupStep.SELECT_TAKE_CATEGORY]: true,
    }),
    [signupStore.form, signupStore.emailConfirmed],
  );

  const onMoveNext = useCallback(async () => {
    if (step + 1 === SignupStep.COMPLETE_SIGNUP) {
      await signupStore.signup();
    }
    setStep((step + 1) as SignupStep);
  }, [step, signupStore]);
  const onMovePrev = useCallback(
    () => setStep((step - 1) as SignupStep),
    [step],
  );
  const onClickReqConfirmMail = useCallback(
    (email) =>
      signupStore.sendCertificationMail(`${email}@${selectedUniv.email}`),
    [signupStore, selectedUniv],
  );
  const onCheckConfirmMail = useCallback(
    (code) => signupStore.confirmCertification(code),
    [signupStore],
  );
  const onToggleCategory = useCallback(
    (type, id) => {
      let originalList = [];
      let typeToText = ""
      if (type === CategoryType.GIVE) {
        originalList = [...signupStore.form.give];
        typeToText = "give"
      } else if (type === CategoryType.TAKE) {
        originalList = [...signupStore.form.take];
        typeToText = "take"
      }

      const found = originalList.find((x) => x === id);

      if (found) signupStore.setFormValue(typeToText, [...originalList.filter(x => x !== id)])
      else signupStore.setFormValue(typeToText, [...originalList, id])

    },
    [signupStore, signupStore.form],
  );

  useEffect(() => {
    async function findAllUniv() {
      await signupStore.findAllUniv();
    }
    findAllUniv();
  }, [signupStore]);

  useEffect(() => {
    if (
      step === SignupStep.SELECT_TAKE_CATEGORY ||
      step === SignupStep.SELECT_GIVE_CATEGORY
    ) {
      categoryStore.getCategoryList();
    }
  }, [step, categoryStore]);

  return (
    <SignupPageTemplate
      step={step}
      onClickNext={onMoveNext}
      onClickPrev={onMovePrev}
      onClickReqConfirmMail={onClickReqConfirmMail}
      onCheckConfirmMail={onCheckConfirmMail}
      onToggleCategory={onToggleCategory}
      selectedUniv={selectedUniv}
      isStepCompleted={isStepCompleted}
      selectedList={[]}
    />
  );
});

export default SignupPage;
