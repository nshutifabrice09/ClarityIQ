// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartBar33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartBar33Icon(props: ChartBar33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.286 10.286H7.714v5.785h2.572v-5.785zM4.5 12.857H1.929v3.214H4.5v-3.214zm11.571-5.143H13.5v8.357h2.571V7.714z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.543"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M3.214 7.714L6.43 4.5 9 7.071l5.143-5.142"}
        stroke={"currentColor"}
        strokeWidth={"1.543"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M10.929 1.929h3.214v3.214"}
        stroke={"currentColor"}
        strokeWidth={"1.543"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default ChartBar33Icon;
/* prettier-ignore-end */
