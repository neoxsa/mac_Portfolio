import WindowWrapper from "#hoc/WindowWrapper"
import { WindowControl } from "#components"
import useWindowStore from "#store/window"

function ImageWindowContent() {
    const { windows } = useWindowStore();

    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data

    return (
        <>
            <div id="window-header">
                <WindowControl target="imgfile" />
                <h1>{name}</h1>
            </div>

            <div className="p-5 bg-white">
                {
                    imageUrl ? (
                        <div className="w-full">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="w-full h-auto max-h-[70vh] object-contain rounded"
                            />
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile")

export default ImageWindow
