// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.658 16.98c-1.643 0-3.126-.345-4.45-1.035a7.777 7.777 0 01-3.096-2.958C.371 11.705 0 10.206 0 8.49c0-1.696.38-3.185 1.142-4.467A7.669 7.669 0 014.27 1.035C5.592.345 7.075 0 8.719 0c1.643 0 3.126.345 4.449 1.035a7.667 7.667 0 013.126 2.988c.762 1.282 1.142 2.771 1.142 4.467 0 1.696-.39 3.195-1.172 4.497a7.678 7.678 0 01-3.156 2.958c-1.323.69-2.806 1.035-4.45 1.035zm0-4.378c.982 0 1.814-.355 2.495-1.065.702-.71 1.053-1.726 1.053-3.047 0-1.321-.341-2.337-1.022-3.047-.662-.71-1.484-1.065-2.466-1.065-1.002 0-1.834.355-2.495 1.065-.661.69-.992 1.706-.992 3.047 0 1.321.32 2.337.962 3.047.661.71 1.483 1.065 2.465 1.065z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
