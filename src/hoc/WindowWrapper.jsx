import { useLayoutEffect, useRef } from 'react';
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function WindowWrapper(Component, windowKey) {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        //    Manage Animation
        const ref = useRef(null)

        useGSAP(() => {
            const element = ref.current;

            if (!element || !isOpen) return;

            if (isOpen) {
                element.style.display = "block";
                gsap.fromTo(element,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
                );
            } else {
                gsap.to(element, {
                    scale: 0.8, opacity: 0, y: 40, duration: 0.3, ease: "power3.in",
                    onComplete: () => { element.style.display = "none"; }
                });
            }
        }, [isOpen])

        // Drag Effect (Window element)
        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            const [instance] = Draggable.create(element, { onPress: () => focusWindow(windowKey) });

            return () => instance.kill();
        }, []);

        // hide/show window when icon click
        useLayoutEffect(() => {
            const element = ref.current;
            if (!element) return;
            element.style.display = isOpen ? "block" : "none"

        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className='absolute'
            >
                {/* Component prop - finder, photo, terminal, etc */}
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;


    return Wrapped;
}

export default WindowWrapper
