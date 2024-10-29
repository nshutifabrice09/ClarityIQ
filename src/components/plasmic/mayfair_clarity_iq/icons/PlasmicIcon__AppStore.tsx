// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppStoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppStoreIcon(props: AppStoreIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.714 2.571H2.571v5.143h5.143V2.571zm5.143-.643L9.643 5.143l3.214 3.214 3.214-3.214-3.214-3.215zm2.572 8.358h-5.143v5.143h5.143v-5.143zm-7.715 0H2.571v5.143h5.143v-5.143z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.543"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default AppStoreIcon;
/* prettier-ignore-end */
