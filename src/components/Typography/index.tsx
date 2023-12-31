import React from 'react';

import { HeadingH1, HeadingH2, HeadingH3, HeadingH4, ParagraphX1, ParagraphX2 } from './Typography.styled';

export interface ITypography {
  content?: string;
  role?: 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2';
  fontStyle?: 'medium' | 'bold' | 'italic';
  /**
   * Top margin
   */
  mt?: string;
  /**
   * Bottom margin
   */
  mb?: string;
  /**
   * Right margin
   */
  mr?: string;
  /**
   * Left margin
   */
  ml?: string;
  /**
   * Allows to use styled-components
   */
  className?: string;
}

function Typography({ content, role, fontStyle, mb, mt, mr, ml, className }: ITypography) {
  switch (role) {
    case 'h1':
      return (
        <HeadingH1 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </HeadingH1>
      );
    case 'h2':
      return (
        <HeadingH2 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </HeadingH2>
      );
    case 'h3':
      return (
        <HeadingH3 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </HeadingH3>
      );
    case 'h4':
      return (
        <HeadingH4 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </HeadingH4>
      );
    case 'p1':
      return (
        <ParagraphX1 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </ParagraphX1>
      );
    case 'p2':
      return (
        <ParagraphX2 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </ParagraphX2>
      );
    default:
      return (
        <ParagraphX1 $fontStyle={fontStyle} $mb={mb} $mt={mt} $mr={mr} $ml={ml} className={className}>
          {content}
        </ParagraphX1>
      );
  }
}

export default Typography;
