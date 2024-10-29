// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1.2 4L3 5.8 6.8 2"}
        stroke={"currentColor"}
        strokeWidth={".48"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
