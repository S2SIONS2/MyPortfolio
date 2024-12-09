import { useEffect, useState } from 'react';
import './Clock.scss';

const Clock: React.FC = () => {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString('it-IT', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // 24시간 형식
        })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString('it-IT', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                })
            );
        }, 1000); // 1초마다 업데이트

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Clock row align-items-center justify-content-center m-0 g-0'>
            {time}
        </div>
    );
};

export default Clock;