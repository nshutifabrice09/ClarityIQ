// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Code1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Code1Icon(props: Code1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.2 15.4L6.6 22l6.6 6.6m17.6-13.2l6.6 6.6-6.6 6.6m-13.2 5.5l8.8-24.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2.64"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Code1Icon;
/* prettier-ignore-end */
