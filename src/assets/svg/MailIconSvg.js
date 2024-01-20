import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailIconSvg(props) {
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
                d="M16.563 3.75H3.438c-.863 0-1.563.7-1.563 1.563v9.375c0 .862.7 1.562 1.563 1.562h13.124c.863 0 1.563-.7 1.563-1.563V5.313c0-.863-.7-1.563-1.563-1.563z"
                stroke="#898989"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4.375 6.25L10 10.625l5.625-4.375"
                stroke="#898989"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default MailIconSvg
