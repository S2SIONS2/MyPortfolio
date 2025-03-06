import './Bubble.scss';

type BubbleProps = {
    className?: string;
}

const Bubble = ( { className }: BubbleProps) => {
    return (
        <div className={`Bubble ${className || ''}`.trim()}>
            
        </div>
    )
}

export default Bubble;