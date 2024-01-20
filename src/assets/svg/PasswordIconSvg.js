import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PasswordIconSvg(props) {
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
                d="M13.125 8.125v-3.71a3.125 3.125 0 10-6.25 0v3.71M14.375 8.125h-8.75c-1.036 0-1.875.84-1.875 1.875v6.875c0 1.035.84 1.875 1.875 1.875h8.75c1.036 0 1.875-.84 1.875-1.875V10c0-1.036-.84-1.875-1.875-1.875z"
                stroke="#898989"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default PasswordIconSvg
