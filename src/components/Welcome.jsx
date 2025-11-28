import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

// To Render the text (get each char)
const renderText = (text, className, baseWeight = 400) => {

    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{
                fontVariationSettings: `'wght' ${baseWeight}`
            }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ))
}

// When Hover Over the Text (Animations)
const setupTextHover = (container, type) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll("span") // here each char is in it's own span

    const { min, max, default: base } = FONT_WEIGHTS[type]

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        })
    };
    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // clean-up Event Listeners
    return () => {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
    }
}

function Welcome() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title")
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle")

        return () => {
            subtitleCleanup();
            titleCleanup();
        }
    });

    return (
        <section id="welcome">
            <p
                ref={subtitleRef}>
                {/* render text through custom renderText function */}
                {renderText(
                    "Hey, I'm ", 'text-xl md:text-2xl xl:text-3xl font-georama',
                    100
                )}
            </p>
            <h1
                ref={titleRef}
                className="mt-7">
                {renderText(
                    "NeoXsa", 'text-6xl md:text-7xl xl:text-9xl italic font-georama text-green-500'
                )}
            </h1>

            <div className="small-screen">
                <p>This Portfolio is designed for Desktop/Tablet screens only</p>
            </div>
        </section>
    )
}

export default Welcome
