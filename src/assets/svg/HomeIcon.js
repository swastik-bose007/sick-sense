import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.195 2.294a.312.312 0 00-.39 0l-6.563 5.25a.312.312 0 00-.117.245v8.774c0 .172.14.312.313.312h3.437v-6.563a.937.937 0 01.938-.937h4.375a.938.938 0 01.937.938v6.562h3.438a.312.312 0 00.312-.313V7.787a.314.314 0 00-.117-.243l-6.563-5.25zM8.632.83a2.187 2.187 0 012.734 0l6.563 5.25c.519.415.821 1.044.821 1.709v8.774a2.188 2.188 0 01-2.188 2.187h-4.375a.938.938 0 01-.937-.938V11.25h-2.5v6.563a.937.937 0 01-.938.937H3.438a2.188 2.188 0 01-2.187-2.188V7.787c0-.663.302-1.292.821-1.707L8.633.83z"
                fill="#ADD0CA"
            />
        </Svg>
    )
}

export default HomeIcon
