// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadIcon(props: DownloadIconProps) {
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
        d={"M8 11.429V1.714"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M10.286 9.143L8 11.429 5.714 9.143"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M10.857 6.857h1.714A1.143 1.143 0 0113.714 8v4.571a1.143 1.143 0 01-1.143 1.143H3.43a1.143 1.143 0 01-1.143-1.143V8A1.143 1.143 0 013.43 6.857h1.714"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default DownloadIcon;
/* prettier-ignore-end */
