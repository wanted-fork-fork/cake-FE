import SignupPageTemplate, {
  SignupStep,
} from "@src/templates/SignupPage.template";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";

const SignupPage = observer(() => {
  const { signupStore } = useStores();

  const [step, setStep] = useState<SignupStep>(SignupStep.SELECT_SCHOOL);
  const [univId, setUnivId] = useState("");

  const onMoveNext = useCallback(
    () => setStep((step + 1) as SignupStep),
    [step],
  );
  const onMovePrev = useCallback(
    () => setStep((step - 1) as SignupStep),
    [step],
  );

  const isStepCompleted = useMemo(
    () => ({
      [SignupStep.SELECT_SCHOOL]: univId !== "",
      [SignupStep.CONFIRM_EMAIL]: true,
      [SignupStep.PASSWORD_INPUT]: true,
      [SignupStep.DETAILS_INPUT]: true,
      [SignupStep.SELECT_GIVE_CATEGORY]: true,
      [SignupStep.SELECT_TAKE_CATEGORY]: true,
    }),
    [univId],
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
      univList={signupStore.univList}
      univId={univId}
      setUnivId={setUnivId}
      isStepCompleted={isStepCompleted}
      categoryList={[]}
      selectedList={[]}
    />
  );
});

export default SignupPage;
