// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval8Icon(props: Oval8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 493 493"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"246.5"}
        cy={"246.5"}
        r={"246.5"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Oval8Icon;
/* prettier-ignore-end */
