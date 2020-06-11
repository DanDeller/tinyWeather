import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import PropTypes from 'prop-types';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({loading}) => {
  return (
    <div className={`spinnerWrap ${(loading ? 'spinnerShow' : 'spinnerHide')}`}>
      <p className="spinnerBlurb">Gathering data...</p>  
      <div className="spinner">
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