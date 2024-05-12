import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Close(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={15} cy={15} r={14.5} stroke="#ADD0CA" />
            <G clipPath="url(#clip0_410_43151)">
                <Path
                    d="M15 13.822l4.125-4.125 1.178 1.178L16.178 15l4.125 4.125-1.178 1.178L15 16.178l-4.125 4.125-1.178-1.178L13.822 15l-4.125-4.125 1.178-1.178L15 13.822z"
                    fill="#ADD0CA"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_410_43151">
                    <Path fill="#fff" transform="translate(5 5)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Close
