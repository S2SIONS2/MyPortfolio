import './Application.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faFolderOpen, faT } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { useState } from 'react';
import ModalHeader from './ModalHeader';

interface AppProps {
    iconImg: IconProp;
    name: string;
    modalName?: React.FC;
    url?: string;
}

library.add(faAddressCard, faFolderOpen, faT, faGithub);

const Application: React.FC<AppProps> = ({ iconImg, name, modalName: ModalComponent, url }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (url) {
      // 외부 링크 열기
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // 모달 열기
      setModalOpen(true);
    }
  };

  return (
    <div className="Application">
      <div className="appIcon" onClick={handleClick}>
        <FontAwesomeIcon icon={iconImg} />
      </div>
      <p className="row align-items-center justify-content-center name">{name}</p>

      {/* 모달 */}
      {modalOpen && ModalComponent && (
        <div className='ModalWrap'>
            <ModalHeader setModalOpen={setModalOpen} />
            <ModalComponent />
        </div>
      )}
    </div>
  );
};

export default Application;
