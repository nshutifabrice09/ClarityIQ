// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M25 12V9.05a7 7 0 10-14 0v7a1 1 0 002 0V14h8v-2h-8V9.05a5 5 0 1110 0V16a1 1 0 102 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 005.91 34h24.18A1.91 1.91 0 0032 32.09V12z"
        }
        className={"clr-i-outline clr-i-outline-path-1"}
      ></path>

      <path fill={"none"} d={"M0 0h36v36H0z"}></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
