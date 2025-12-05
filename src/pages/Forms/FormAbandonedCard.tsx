import { useEffect } from "react";
import formbricks from "@formbricks/js";

export default function FormAbandonedCard() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.setup({
        environmentId: "cmisyzqrm0004o801m96pc87w",
        appUrl: "https://form.ofertinhas.site",
      });
    }
  }, []);

  return (
    <div>
      <div className="form"></div>
    </div>
  );
}
