// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame7Icon(props: Frame7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 335 171"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3 126l164.5 41.1L332 31.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"3"} cy={"126"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"167.5"} cy={"167.1"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"332"} cy={"31.5"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame7Icon;
/* prettier-ignore-end */
