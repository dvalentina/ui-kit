import styled, { css } from 'styled-components';

interface ITypography {
  $fontStyle?: 'medium' | 'bold' | 'italic';
  $mb?: string;
  $mt?: string;
  $mr?: string;
  $ml?: string;
}

const TypographyBase = css<ITypography>`
  color: ${({ theme }) => theme.text};
  font-style: ${({ $fontStyle }) => ($fontStyle === 'italic' ? 'italic' : 'normal')};
  font-weight: ${({ $fontStyle }) => ($fontStyle === 'bold' ? '700' : '500')};
  ${({ $mt }) => css`
    margin-top: ${$mt};
  `};
  ${({ $mr }) => css`
    margin-right: ${$mr};
  `};
  ${({ $mb }) => css`
    margin-bottom: ${$mb};
  `};
  ${({ $ml }) => css`
    margin-left: ${$ml};
  `};
`;

export const HeadingH1 = styled.h1<ITypography>`
  ${TypographyBase}
  font-size: 56px;
  line-height: 68px;
`;

export const HeadingH2 = styled.h2<ITypography>`
  ${TypographyBase}
  font-size: 40px;
  line-height: 44px;
`;

export const HeadingH3 = styled.h3<ITypography>`
  ${TypographyBase}
  font-size: 28px;
  line-height: 36px;
`;

export const HeadingH4 = styled.h4<ITypography>`
  ${TypographyBase}
  font-size: 20px;
  line-height: 28px;
`;

export const ParagraphX1 = styled.p<ITypography>`
  ${TypographyBase}
  font-size: 16px;
  line-height: 22px;
`;

export const ParagraphX2 = styled.p<ITypography>`
  ${TypographyBase}
  font-size: 14px;
  font-weight: ${({ $fontStyle }) => ($fontStyle === 'bold' ? '700' : '400')};
  line-height: 20px;
`;
