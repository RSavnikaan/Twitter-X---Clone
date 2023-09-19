import classNames from "classnames";
import { createElement } from "react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function Button({ size,children }){
    return createElement('button', {
        className:classNames("bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors",{
            "px-4 h-9": size == 'normal',
            "px-4 h-[52px] w-full text-[17px] ": size == 'large',

        }
        )
    },children)
}

Button.prototype = {
    size: PropTypes.oneOf(['normal','large'])
}

Button.defaultProps = {
    size:'normal'
}