// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame6Icon(props: Frame6IconProps) {
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
        d={"M3 156.811l164.5-58.472L332 3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"3"} cy={"156.811"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"167.5"} cy={"98.339"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"332"} cy={"3"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
