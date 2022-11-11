import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import Color from "../Colors"

const BackIcon = (props) => (
  <Svg width={27} height={32} viewBox="0 0 7 12" rotation={180} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-9-6h24v24H-9z" />
      <Path
        d="M.31.71a.996.996 0 0 0 0 1.41L4.19 6 .31 9.88a.996.996 0 1 0 1.41 1.41L6.31 6.7a.996.996 0 0 0 0-1.41L1.72.7C1.34.32.7.32.31.71Z"
        fill={Color.white.PrimaryLight}
      />
    </G>
  </Svg>
)

export default BackIcon
