import React from "react";
import { css } from "@emotion/core";
import style from '../../assets/styles/style.less';
import BarLoader from "react-spinners/BarLoader";
import PropTypes from 'prop-types';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = (props) => {
  return (
    <div className={`${style.spinnerWrap} ${(props.loading ? style.spinnerShow : style.spinnerHide)}`}>
      <p className={style.spinnerBlurb}>Gathering data...</p>  
      <div className={style.spinner}>
        <BarLoader
          css={override}
          height={10}
          width={180}
          color={"#F45050"}
        />
      </div>
    </div>
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool
};

export default Spinner;