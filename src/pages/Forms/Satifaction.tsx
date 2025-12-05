import { useEffect } from "react";
import formbricks from "@formbricks/js";

export default function Satisfaction() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.setup({
        environmentId: "cmisyzqs30009o801qq4x8jtc",
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
