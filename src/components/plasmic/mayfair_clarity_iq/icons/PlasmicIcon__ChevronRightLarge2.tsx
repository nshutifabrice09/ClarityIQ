// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRightLarge2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRightLarge2Icon(props: ChevronRightLarge2IconProps) {
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
        d={"M3.5 9.695l.805.805 4.5-4.5-4.5-4.5-.805.805L7.195 6 3.5 9.695z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRightLarge2Icon;
/* prettier-ignore-end */
