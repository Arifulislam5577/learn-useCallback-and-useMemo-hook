import React from "react";

const HeadLine = () => {
  console.log("HeadLine Render...");
  return <h2 className="headline">useCallback & useMemo</h2>;
};

export default React.memo(HeadLine);
