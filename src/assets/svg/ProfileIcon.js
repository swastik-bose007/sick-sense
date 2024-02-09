import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.667 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H6.668a3.333 3.333 0 00-3.333 3.333V17.5M10 9.167A3.333 3.333 0 1010 2.5a3.333 3.333 0 000 6.667z"
                stroke="#ADD0CA"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ProfileIcon
