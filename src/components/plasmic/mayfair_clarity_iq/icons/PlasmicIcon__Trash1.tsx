// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Trash1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Trash1Icon(props: Trash1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.143 5V2.143h5.714V5m2.857 5v6.429a1.428 1.428 0 01-1.428 1.428H5.714a1.429 1.429 0 01-1.428-1.428V10M10 11.429v2.857m-2.857-2.857v2.857m5.714-2.857v2.857m5-9.286H2.143v2.857h15.714V5z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Trash1Icon;
/* prettier-ignore-end */
