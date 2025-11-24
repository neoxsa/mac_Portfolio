import useWindowStore from "#store/window"


function WindowControl({ target }) {
    const { closeWindow, minimizeWindow } = useWindowStore();
    return (
        <div id="window-controls">
            <div
                className="close"
                onClick={() => closeWindow(target)}></div>
            <div
                className="minimize"
                onClick={() => minimizeWindow(target)}></div>
            <div
                className="maximize"
                onClick={closeWindow} ></div>
        </div>
    );
};

export default WindowControl