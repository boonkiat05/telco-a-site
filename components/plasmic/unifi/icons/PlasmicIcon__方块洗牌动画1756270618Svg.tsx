/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 方块洗牌动画1756270618SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 方块洗牌动画1756270618SvgIcon(
  props: 方块洗牌动画1756270618SvgIconProps
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

      <rect
        width={"10"}
        height={"10"}
        x={"1"}
        y={"1"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          id={"e"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"0;a.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          id={"f"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"b.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          id={"g"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"c.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          id={"h"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"d.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>
      </rect>

      <rect
        width={"10"}
        height={"10"}
        x={"1"}
        y={"13"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          id={"i"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"e.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          id={"j"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"f.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          id={"k"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"g.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          id={"l"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"h.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>
      </rect>

      <rect
        width={"10"}
        height={"10"}
        x={"13"}
        y={"13"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          id={"b"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"i.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          id={"c"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"j.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          id={"d"}
          fill={"freeze"}
          attributeName={"x"}
          begin={"k.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          id={"a"}
          fill={"freeze"}
          attributeName={"y"}
          begin={"l.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>
      </rect>
    </svg>
  );
}

export default 方块洗牌动画1756270618SvgIcon;
/* prettier-ignore-end */
