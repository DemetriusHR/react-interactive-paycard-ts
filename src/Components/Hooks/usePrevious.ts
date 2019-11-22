import * as React from "react";

interface IUsePrevious {
    currentFocusedElm?: HTMLElement;
}

function usePrevious(value: IUsePrevious) {
    const ref = React.useRef<IUsePrevious>();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default usePrevious