// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pen1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pen1Icon(props: Pen1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M11.429 5L15 8.571"}
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M7.857 15.714l-5 1.429 1.429-5 8.867-8.867a1.428 1.428 0 012.02 0l1.551 1.551a1.428 1.428 0 010 2.02l-8.867 8.867z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Pen1Icon;
/* prettier-ignore-end */
