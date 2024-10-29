// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
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
          "M8.659 16.98c-1.644 0-3.127-.345-4.45-1.035a7.775 7.775 0 01-3.096-2.958C.37 11.705 0 10.206 0 8.49c0-1.696.381-3.185 1.143-4.467a7.67 7.67 0 013.126-2.988C5.592.345 7.075 0 8.72 0c1.643 0 3.126.345 4.449 1.035a7.666 7.666 0 013.126 2.988c.762 1.282 1.143 2.771 1.143 4.467 0 1.696-.391 3.195-1.172 4.497a7.678 7.678 0 01-3.157 2.958c-1.323.69-2.806 1.035-4.45 1.035zm0-4.378c.981 0 1.814-.355 2.495-1.065.701-.71 1.052-1.726 1.052-3.047 0-1.321-.34-2.337-1.022-3.047-.662-.71-1.483-1.065-2.465-1.065-1.002 0-1.834.355-2.496 1.065-.661.69-.992 1.706-.992 3.047 0 1.321.32 2.337.963 3.047.66.71 1.482 1.065 2.465 1.065z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
