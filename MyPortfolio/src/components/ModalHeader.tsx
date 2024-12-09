import './ModalHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHeader: React.FC<ModalProps> = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false); // 모달을 닫음
      };
          
    return (
        <div className="ModalHeader">
            <button type="button" onClick={closeModal}>
                <FontAwesomeIcon icon={faX} />
            </button>
        </div>
    )
}

export default ModalHeader;