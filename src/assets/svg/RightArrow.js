import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrow(props) {
    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.086 5.469l7.031 7.031-7.031 7.031M19.14 12.5H4.884"
                stroke="#ADD0CA"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default RightArrow