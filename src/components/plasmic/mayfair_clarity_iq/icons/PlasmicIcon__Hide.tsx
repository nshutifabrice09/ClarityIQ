// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HideIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HideIcon(props: HideIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.927 8.676a1.18 1.18 0 010-1.352C2.827 6.051 5.04 3.429 8 3.429c2.96 0 5.174 2.622 6.073 3.895a1.18 1.18 0 010 1.352c-.9 1.273-3.112 3.895-6.073 3.895-2.96 0-5.174-2.622-6.073-3.895z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M8 10.286a2.286 2.286 0 100-4.572 2.286 2.286 0 000 4.572zm-5.714 3.428L13.714 2.286"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default HideIcon;
/* prettier-ignore-end */
