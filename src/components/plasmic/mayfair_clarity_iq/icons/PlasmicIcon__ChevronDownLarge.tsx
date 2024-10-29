// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDownLargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDownLargeIcon(props: ChevronDownLargeIconProps) {
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
        d={
          "M2.689 4.083l-.939.939L7 10.272l5.25-5.25-.939-.939L7 8.395 2.689 4.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDownLargeIcon;
/* prettier-ignore-end */
