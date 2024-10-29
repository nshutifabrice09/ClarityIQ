// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval7Icon(props: Oval7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"100"} cy={"100"} r={"100"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Oval7Icon;
/* prettier-ignore-end */
