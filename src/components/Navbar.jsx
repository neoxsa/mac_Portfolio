import { navLinks, navIcons } from '#constants'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function Navbar() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(()=>{
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
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold'>Apple</p>

                <ul>
                    {
                        navLinks.map(({ id, name }) => ( //destructuring directly in the parameters
                            <li key={id}>
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
                                className='icon-hover'
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
