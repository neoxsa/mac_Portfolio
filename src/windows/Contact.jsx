import { WindowControl } from "#components"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

function Contact() {
    return (
        <>
            <div id="window-header">
                <WindowControl target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/admin.png"
                    alt="Admin"
                    className="w-20 rounded-full"
                />

                <h3>Let's Connect</h3>
                {/* <p>Got an idea? A bug to squash? OR just wanna talk tech? I'm in.</p> */}
                <p className="text-gray-500 font-medium">Email : contact@example.com</p>
            </div>

            <ul className="pb-5 px-5">
                {socials.map(({ id, bg, icon, text, link }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={icon}
                                alt={text}
                                className="size-5"
                                title={text}
                            />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

const ContactWrapper = WindowWrapper(Contact, "contact")

export default ContactWrapper
