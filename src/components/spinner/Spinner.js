import React from "react";
import { css } from "@emotion/core";
import style from '../../assets/styles/style.less';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = (props) => {
  return (
    <div className={`${style.spinnerWrap} ${(props.loading ? style.spinnerShow : style.spinnerHide)}`}>
      <div className={style.spinner}>
        <ClimbingBoxLoader
          css={override}
          size={15}
          color={"#F45050"}
        />
      </div>
    </div>
  );
}

export default Spinner;