// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronLeftLarge2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronLeftLarge2Icon(props: ChevronLeftLarge2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8.305 2.305L7.5 1.5 3 6l4.5 4.5.805-.805L4.609 6l3.696-3.695z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronLeftLarge2Icon;
/* prettier-ignore-end */
