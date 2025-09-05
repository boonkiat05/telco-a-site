/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 电话呼叫1756259073SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 电话呼叫1756259073SvgIcon(
  props: 电话呼叫1756259073SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"12"} cy={"12"} r={"0"} fill={"currentColor"}>
        <animate
          attributeName={"r"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          repeatCount={"indefinite"}
          values={"0;11"}
        ></animate>

        <animate
          attributeName={"opacity"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          repeatCount={"indefinite"}
          values={"1;0"}
        ></animate>
      </circle>
    </svg>
  );
}

export default 电话呼叫1756259073SvgIcon;
/* prettier-ignore-end */
