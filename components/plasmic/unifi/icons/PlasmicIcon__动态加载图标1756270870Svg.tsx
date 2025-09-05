/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 动态加载图标1756270870SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 动态加载图标1756270870SvgIcon(
  props: 动态加载图标1756270870SvgIconProps
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
          id={"b"}
          fill={"freeze"}
          attributeName={"r"}
          begin={"0;a.begin+0.6s"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          values={"0;11"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"opacity"}
          begin={"0;a.begin+0.6s"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          values={"1;0"}
        ></animate>
      </circle>

      <circle cx={"12"} cy={"12"} r={"0"} fill={"currentColor"}>
        <animate
          id={"a"}
          fill={"freeze"}
          attributeName={"r"}
          begin={"b.begin+0.6s"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          values={"0;11"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"opacity"}
          begin={"b.begin+0.6s"}
          calcMode={"spline"}
          dur={"1.2s"}
          keySplines={".52,.6,.25,.99"}
          values={"1;0"}
        ></animate>
      </circle>
    </svg>
  );
}

export default 动态加载图标1756270870SvgIcon;
/* prettier-ignore-end */
