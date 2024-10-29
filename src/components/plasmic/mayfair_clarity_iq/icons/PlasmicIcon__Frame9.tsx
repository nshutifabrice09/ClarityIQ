// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame9Icon(props: Frame9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 335 172"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3 168.1L167.5 4 332 3.153"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"3"} cy={"168.1"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"167.5"} cy={"4"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"332"} cy={"3.153"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame9Icon;
/* prettier-ignore-end */
