import { navLinks, navIcons } from '#constants'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import useWindowStore from '#store/window';

function Navbar() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const { openWindow } = useWindowStore();

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const dateString = date.toLocaleDateString('en-US', {
                weekday: "short",
                month: "short"
            })
            const timeString = date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            })
            setDate(dateString);
            setTime(timeString);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, date]);


    return (
        <nav className="text-white">
            <div>
                <img className='invert' src="/images/logo.svg" alt="logo" />
                <p className='font-bold'>Apple</p>

                <ul>
                    {
                        navLinks.map(({ id, name, type }) => ( //destructuring directly in the parameters
                            <li
                                key={id}
                                onClick={() => openWindow(type)}
                            >
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({ id, img }) => (
                            <li key={id}>
                                <img
                                    src={img}
                                    alt={`icon-${id}`}
                                    className='icon-hover invert'
                                />
                            </li>
                        ))
                    }
                </ul>
                {/* <time>{date}, {time}</time> */}
                <time>{dayjs().format('ddd, MMM D, h:mm A')}</time>
            </div>
        </nav>
    )
}

export default Navbar
