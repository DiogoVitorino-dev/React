import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import Color from "../Colors"

const PauseIcon = (props) => (
  <Svg width={52} height={54} viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-6-5h24v24H-6z" />
      <Path
        d="M2 14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2S0 .9 0 2v10c0 1.1.9 2 2 2ZM8 2v10c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2S8 .9 8 2Z"
        fill={Color.white.PrimaryLight}
      />
    </G>
  </Svg>
)

export default PauseIcon
