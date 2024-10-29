// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group16Icon(props: Group16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 22.033V.28h3.565v21.753H0zm9.172-4.111A7.335 7.335 0 015.4 16.905a7.957 7.957 0 01-2.815-2.793c-.713-1.186-1.076-2.52-1.076-4.024V9.89l2.064-.051V10c0 .892.23 1.695.698 2.402a5.088 5.088 0 001.813 1.688 4.866 4.866 0 002.398.619c1.404 0 2.578-.472 3.536-1.422.958-.951 1.433-2.418 1.433-4.392 0-1.975-.475-3.45-1.426-4.385-.95-.943-2.13-1.408-3.543-1.408a4.96 4.96 0 00-2.398.612A5.011 5.011 0 004.27 5.372c-.467.7-.698 1.503-.698 2.402l-2.064-.08c0-1.511.356-2.845 1.076-4.002C3.305 2.535 4.241 1.629 5.4.98A7.542 7.542 0 019.172 0c1.352 0 2.72.346 3.922 1.032 1.204.685 2.176 1.695 2.911 3.021.742 1.326 1.107 2.933 1.107 4.834 0 1.902-.364 3.59-1.084 4.938-.72 1.348-1.687 2.365-2.89 3.05-1.203.686-2.524 1.032-3.973 1.032l.007.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
