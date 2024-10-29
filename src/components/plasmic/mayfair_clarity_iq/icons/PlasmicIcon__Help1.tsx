// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Help1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Help1Icon(props: Help1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.713 8.187c-.426 0-.772-.355-.705-.775C6.42 4.86 8.364 3 11.738 3c3.375 0 5.65 2.04 5.65 4.822 0 2.016-.998 3.433-2.685 4.46-1.65.989-2.121 1.677-2.121 3.015v.045a.75.75 0 01-.75.75h-1.155a.75.75 0 01-.75-.742l-.005-.3c-.064-1.832.716-3.002 2.468-4.069 1.545-.947 2.095-1.702 2.095-3.042 0-1.468-1.136-2.546-2.888-2.546-1.514 0-2.566.793-2.907 2.103-.1.38-.417.691-.81.691H6.713zM11.244 21c.933 0 1.643-.711 1.643-1.635a1.61 1.61 0 00-1.643-1.638c-.909 0-1.63.711-1.63 1.636 0 .926.721 1.637 1.63 1.637z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Help1Icon;
/* prettier-ignore-end */
