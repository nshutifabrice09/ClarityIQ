// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PenIcon(props: PenIconProps) {
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
        d={"M8 1.714A6.286 6.286 0 1014.286 8 6.293 6.293 0 008 1.714z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PenIcon;
/* prettier-ignore-end */
