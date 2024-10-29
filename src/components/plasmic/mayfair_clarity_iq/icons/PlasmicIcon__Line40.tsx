// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line40Icon(props: Line40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 325 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path stroke={"currentColor"} d={"M0 .5h325"}></path>
    </svg>
  );
}

export default Line40Icon;
/* prettier-ignore-end */
