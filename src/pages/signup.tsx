import SignupPageTemplate from "@src/templates/SignupPage.template";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import { SignupStep } from "@src/constant/enum.constant";

const SignupPage = observer(() => {
  const { signupStore } = useStores();

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

  const onMoveNext = useCallback(
    () => setStep((step + 1) as SignupStep),
    [step],
  );
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

  useEffect(() => {
    async function findAllUniv() {
      await signupStore.findAllUniv();
    }
    findAllUniv();
  }, [signupStore]);

  return (
    <SignupPageTemplate
      step={step}
      onClickNext={onMoveNext}
      onClickPrev={onMovePrev}
      onClickReqConfirmMail={onClickReqConfirmMail}
      onCheckConfirmMail={onCheckConfirmMail}
      selectedUniv={selectedUniv}
      isStepCompleted={isStepCompleted}
      categoryList={[]}
      selectedList={[]}
    />
  );
});

export default SignupPage;
