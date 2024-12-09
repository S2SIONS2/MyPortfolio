import { useRef, useEffect } from 'react';
import './Cursor.scss';

const Cursor:React.FC = () => {
const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
    }, []);

    return (
        <div className="Cursor" ref={cursorRef}>

        </div>
    )
}

export default Cursor;