import React from 'react';

import { Hr as StyledHr } from './Hr.styled';

export interface IHr {
  /**
   * Allows to use styled-components
   */
  className?: string;
  /**
   * The width of the hr
   */
  width?: string;
}

/**
 * A styled divider
 */
function Hr({ className, width }: IHr) {
  return <StyledHr className={className} width={width} />;
}

export default Hr;
