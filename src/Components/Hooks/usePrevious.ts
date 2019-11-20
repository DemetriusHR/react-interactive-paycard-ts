import * as React from "react";

function usePrevious(value: { currentFocusedElm: HTMLElement }) {
    const ref = React.useRef<{ currentFocusedElm: HTMLElement }>();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default usePrevious