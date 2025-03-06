import './BubbleAmimation.scss'
import Bubble from "../components/Bubble";
import { useEffect, useState } from 'react';

const BubbleAnimation = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
        
        
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`BubbleAnimation ${loading ? 'loading' : 'done'}`}>
            {[...Array(50)].map((_, index) => (
                <Bubble key={index} className={`Bubble-${index + 1}`} />
            ))}
            <div className='WaterSurface'></div>
            <div className='BackgroundWave'></div>
        </div>
    )
}

export default BubbleAnimation;