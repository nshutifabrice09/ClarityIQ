// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Calendar2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Calendar2Icon(props: Calendar2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9.5 3V1.5M4.5 3V1.5"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M1.5 5h11"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M12.5 3h-11v9h11V3z"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Calendar2Icon;
/* prettier-ignore-end */
