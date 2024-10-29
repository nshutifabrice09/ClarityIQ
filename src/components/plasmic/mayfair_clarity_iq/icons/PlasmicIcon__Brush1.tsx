// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Brush1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Brush1Icon(props: Brush1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M23.85 7.65l4.5 4.5"}
        stroke={"currentColor"}
        strokeWidth={"2.16"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M18 22.5L13.5 18 25.176 6.324a3.182 3.182 0 114.5 4.5L18 22.5zm-9.745.155a3.6 3.6 0 015.091 5.091C11.94 29.152 6.3 29.7 6.3 29.7s.548-5.64 1.955-7.045z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.16"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Brush1Icon;
/* prettier-ignore-end */
