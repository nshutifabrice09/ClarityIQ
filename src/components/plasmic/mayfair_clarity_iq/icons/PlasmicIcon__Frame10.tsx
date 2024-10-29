// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame10Icon(props: Frame10IconProps) {
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
        d={"M3 107.658L167.5 167.1 332 25.838"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"3"} cy={"107.658"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"167.5"} cy={"167.1"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"332"} cy={"25.838"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */
