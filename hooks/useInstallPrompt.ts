/* eslint-disable no-console */
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
};

const useInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [actionPrompt, setActionPrompt] = useState<boolean>(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const promptInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setActionPrompt(true)
        setDeferredPrompt(null);
      });
    }
  };

  return { deferredPrompt, promptInstall, actionPrompt };
};

export default useInstallPrompt;
