export function checkMinimumLength({
  value,
  minimum,
  error,
  keyName,
  message,
}) {
  if (value.length <= minimum) {
    return { ...error, [keyName]: message };
  }
  return error;
}

export default {};
