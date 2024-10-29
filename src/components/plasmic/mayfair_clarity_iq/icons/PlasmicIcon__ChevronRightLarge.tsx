// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRightLargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRightLargeIcon(props: ChevronRightLargeIconProps) {
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
        d={"M4.667 12.927L5.739 14l6-6-6-6-1.072 1.073L9.594 8l-4.927 4.927z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRightLargeIcon;
/* prettier-ignore-end */
