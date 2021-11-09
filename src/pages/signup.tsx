import SignupPageTemplate, {
  SignupStep,
} from "@src/templates/SignupPage.template";
import { useCallback, useState } from "react";

function SignupPage() {
  const [step, setStep] = useState<SignupStep>(SignupStep.SELECT_SCHOOL);

  const onClick = useCallback(() => setStep((step + 1) as SignupStep), [step]);

  return <SignupPageTemplate step={step} onClickNext={onClick} />;
}

export default SignupPage;
