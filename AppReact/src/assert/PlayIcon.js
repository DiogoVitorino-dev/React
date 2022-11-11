import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const PlayIcon = (props) => (
  <Svg width={props.size} height={props.size + 3} translateX={5} viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-7-5h24v24H-7z" />
      <Path
        d="M0 1.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L1.54.98A.998.998 0 0 0 0 1.82Z"
        fill='#fff'
      />
    </G>
  </Svg>
)
export default PlayIcon