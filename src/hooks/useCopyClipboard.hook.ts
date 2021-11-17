import { useCallback, useState } from "react";

function useCopyClipboardHook(text) {
  const [copied, setCopied] = useState<boolean>(false);

  const onCopy = useCallback(
    async (e) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        setCopied(false);
      }
    },
    [text],
  );

  return [copied, onCopy];
}

export default useCopyClipboardHook;
