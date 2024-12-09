import { useState } from "react";
import { Calendar } from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

const CalendarPage: React.FC = () => {
    // react-calendar 라이브러리 기본 설정
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [todayValue, onChange] = useState<Value>(new Date());

    return (
        <div className="Calendar">
            <Calendar 
                onChange={onChange} 
                value={todayValue} 
                formatDay={(_, date) => moment(date).format("D")}
            />
        </div>
    )
}

export default CalendarPage;
