// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDownLarge2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDownLarge2Icon(props: ChevronDownLarge2IconProps) {
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
        d={"M3.073 4.667L2 5.739l6 6 6-6-1.073-1.072L8 9.594 3.073 4.667z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDownLarge2Icon;
/* prettier-ignore-end */
