// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line24Icon(props: Line24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 333"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1 0v334"} stroke={"currentColor"} strokeDasharray={"3"}></path>
    </svg>
  );
}

export default Line24Icon;
/* prettier-ignore-end */
