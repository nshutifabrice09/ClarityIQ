// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarIcon(props: CalendarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16.286 5.143V2.57M7.714 5.143V2.57"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M2.571 8.571H21.43"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M21.429 5.143H2.57V20.57h18.86V5.143z"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
