// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoveLayerDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoveLayerDownIcon(props: MoveLayerDownIconProps) {
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
        d={"M8 1.714v9.143"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M11.429 7.429L8 10.857 4.571 7.43m9.143 6.284H2.286"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default MoveLayerDownIcon;
/* prettier-ignore-end */
