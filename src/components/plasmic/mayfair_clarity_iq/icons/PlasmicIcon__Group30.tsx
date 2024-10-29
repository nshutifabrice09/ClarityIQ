// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group30Icon(props: Group30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 121 84"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h120.9v83.46H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */
