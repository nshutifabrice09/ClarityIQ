// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.055 25.188H0V0h10.873c1.872 0 3.484.295 4.85.884 1.367.59 2.422 1.437 3.164 2.557.743 1.113 1.114 2.476 1.114 4.083 0 1.356-.275 2.542-.817 3.567a5.623 5.623 0 01-2.384 2.387c-1.047.568-2.332.885-3.847.958v.302c.936.303 1.701.73 2.288 1.297.594.56 1.129 1.283 1.611 2.16l3.825 6.993h-4.775l-3.595-6.5a9.57 9.57 0 00-1.21-1.827 3.65 3.65 0 00-1.59-1.054c-.631-.214-1.448-.317-2.466-.317H4.048v9.698h.007zm0-21.54v8.497h7.309c1.641 0 2.815-.325 3.52-.98.706-.65 1.062-1.755 1.062-3.31 0-1.554-.356-2.55-1.062-3.212-.705-.664-1.879-.995-3.52-.995H4.055z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
