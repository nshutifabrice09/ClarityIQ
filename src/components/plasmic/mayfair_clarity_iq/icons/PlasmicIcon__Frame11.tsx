// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11Icon(props: Frame11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 604 105"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 90.895s72.707-24.274 120.4-22.141c48.627 2.174 76.744 43.337 120.4 32.91 52.664-12.578 66.879-70.674 120.4-90.424 42.799-15.793 73.722-7.19 120.4 1.568C532.242 22.12 603 56.418 603 56.418"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Frame11Icon;
/* prettier-ignore-end */
