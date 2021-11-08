import { ChangeEvent, useCallback, useEffect, useState } from "react";

function useForm<T>({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleSubmit = useCallback(
    async (e: SubmitEvent) => {
      setSubmitting(true);
      e.preventDefault();
      await new Promise((r) => setTimeout(r, 1000));
      setErrors(validate(values));
    },
    [validate, values],
  );

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [submitting, values, errors, onSubmit]);

  return { values, errors, submitting, handleChange, handleSubmit };
}

export default useForm;
