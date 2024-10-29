// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame8Icon(props: Frame8IconProps) {
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
        d={"M3 144.9L167.5 3 332 88.2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"3"} cy={"144.9"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"167.5"} cy={"3"} r={"3"} fill={"currentColor"}></circle>

      <circle cx={"332"} cy={"88.2"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame8Icon;
/* prettier-ignore-end */
