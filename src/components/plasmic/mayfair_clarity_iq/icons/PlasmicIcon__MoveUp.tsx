// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoveUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoveUpIcon(props: MoveUpIconProps) {
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
        d={"M8 10.857V2.286"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M11.429 5.714L8 2.286 4.571 5.714m9.143 8H2.286"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default MoveUpIcon;
/* prettier-ignore-end */
