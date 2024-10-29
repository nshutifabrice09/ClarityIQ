// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronLeftLargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronLeftLargeIcon(props: ChevronLeftLargeIconProps) {
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
        d={"M11.073 3.073L10 2 4 8l6 6 1.073-1.073L6.145 8l4.928-4.927z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronLeftLargeIcon;
/* prettier-ignore-end */
