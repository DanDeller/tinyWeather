import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import './Spinner.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const SidebarSpinner = ({sidebarLoading}) => {
  return (
    <div className={`sidebar-spinner-wrap ${(sidebarLoading ? 'show' : 'hide')}`}>
      <p>Gathering recently searched cities...</p>  
      <div className="spinner sidebar-spinner">
        <BarLoader
          css={override}
          height={5}
          width={100}
          color={"#F45050"}
        />
      </div>
    </div>
  );
};

SidebarSpinner.propTypes = {
  loading: PropTypes.bool
};

export default SidebarSpinner;