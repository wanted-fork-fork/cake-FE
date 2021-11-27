import { useCallback, useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react";

// constants
import { CategoryType, SignupStep } from "@src/constant/enum.constant";

// stores
import { useStores } from "@src/store/root.store";

// components
import SignupPageTemplate from "@src/templates/SignupPage.template";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import usePreventRouteChangeIf from "@src/hooks/usePreventRouteChangeIf.hook";

const SignupPage = observer(() => {
  const { signupStore, categoryStore } = useStores();

  const [step, setStep] = useState<SignupStep>(SignupStep.TERM_CONFIRM);
  const [confirmed, setConfirmed] = useState(false);

  usePreventRouteChangeIf(step !== SignupStep.COMPLETE_SIGNUP, null);

  const selectedUniv = useMemo(
    () =>
      signupStore.univList.find(
        (x) => x.id.toString() === signupStore.form.univ,
      ),
    [signupStore.univList, signupStore.form.univ],
  );

  const isStepCompleted = useMemo(
    () => ({
      [SignupStep.TERM_CONFIRM]: confirmed,
      [SignupStep.SELECT_SCHOOL]: signupStore.form.univ !== "",
      [SignupStep.CONFIRM_EMAIL]: signupStore.emailConfirmed,
      [SignupStep.PASSWORD_INPUT]: signupStore.form.pwd,
      [SignupStep.DETAILS_INPUT]:
        signupStore.form.univCategory &&
        signupStore.form.nickname &&
        !signupStore.errors.nickname,
      [SignupStep.SELECT_GIVE_CATEGORY]: true,
      [SignupStep.SELECT_TAKE_CATEGORY]: true,
    }),
    [
      confirmed,
      signupStore.form.univ,
      signupStore.form.pwd,
      signupStore.form.univCategory,
      signupStore.form.nickname,
      signupStore.emailConfirmed,
      signupStore.errors.nickname,
    ],
  );

  const onMoveNext = useCallback(async () => {
    if (step + 1 === SignupStep.COMPLETE_SIGNUP) {
      await signupStore.signup();
    }
    if (step === SignupStep.DETAILS_INPUT) {
      const result = await signupStore.checkNicknameOverlap(
        signupStore.form.nickname,
      );
      if (!result) return;
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
      let typeToText = "";
      if (type === CategoryType.GIVE) {
        originalList = [...signupStore.form.give];
        typeToText = "give";
      } else if (type === CategoryType.TAKE) {
        originalList = [...signupStore.form.take];
        typeToText = "take";
      }

      const found = originalList.find((x) => x === id);

      if (found)
        signupStore.setFormValue(typeToText, [
          ...originalList.filter((x) => x !== id),
        ]);
      else signupStore.setFormValue(typeToText, [...originalList, id]);
    },
    [signupStore],
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
      confirmed={confirmed}
      setConfirmed={setConfirmed}
      onClickNext={onMoveNext}
      onClickPrev={onMovePrev}
      onClickReqConfirmMail={onClickReqConfirmMail}
      onCheckConfirmMail={onCheckConfirmMail}
      onToggleCategory={onToggleCategory}
      selectedUniv={selectedUniv}
      isStepCompleted={isStepCompleted}
    />
  );
});

export default SignupPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.GUEST);
