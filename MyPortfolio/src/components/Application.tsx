import './Application.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ModalHeader from './ModalHeader';

interface AppProps {
  icon: IconProp;
  name: string;
  modalName: React.FC;
}

library.add(faAddressCard);

const Application: React.FC<AppProps> = ({ name, modalName: ModalComponent }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="Application">
      <div className="appIcon" onClick={openModal}>
        <FontAwesomeIcon icon={faAddressCard} />
      </div>
      <p className="row align-items-center justify-content-center name">{name}</p>

      {/* 모달 */}
      {modalOpen && (
        <div className='ModalWrap'>
            <ModalHeader setModalOpen={setModalOpen} />
            <ModalComponent />
        </div>
      )}
    </div>
  );
};

export default Application;
