import './Snow.scss';

type SnowProps = {
  className?: string; // 외부에서 className을 전달받기 위한 타입 정의
};

const Snow = ({ className }: SnowProps) => {
  return <div className={`Snow ${className || ''}`.trim()}></div>;
};

export default Snow;
