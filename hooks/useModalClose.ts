import { useEffect } from "react";

export function useModalClose(closePopup: any) {
    useEffect(() => {
  
      const handleOverlay = (event: any) => {
        if (event.target.classList.contains("popup_opened")) {
          closePopup();
        }
      };
  
      const handleEscape = (e: any) => {
        if (e.key === "Escape") {
          closePopup();
        }
      };
  
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleOverlay);
  
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("mousedown", handleOverlay);
      };
    }, [closePopup]);
}