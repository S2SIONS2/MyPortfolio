import './Application.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

interface AppProps {
    icon: IconProp;
    name: string;
}
library.add(faAddressCard);

const Application: React.FC<AppProps> = ({name}) => {
    return(
        <div className="Application">
            <div className='appIcon'>
                <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <p className='row align-items-center justify-content-center name'>{name}</p>
        </div>
    )
}

export default Application;