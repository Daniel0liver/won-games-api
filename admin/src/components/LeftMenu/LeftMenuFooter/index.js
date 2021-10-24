import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by{" "}
        <A
          key="website"
          href="https://github.com/Daniel0liver"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Oliveira
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
