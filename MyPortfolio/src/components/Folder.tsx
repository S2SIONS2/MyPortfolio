import './Folder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

interface FolderProps {
    iconImg: IconProp;
    name: string;
    modalName?: React.FC;
    isFirst? : boolean;
}

library.add(faFolder);

const Folder: React.FC<FolderProps> = ({ iconImg, name, modalName: ModalComponent, isFirst }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isFirst) {
      setModalOpen(true)
    }
  }, [])

  const handleClick = () => {
    // 모달 열기
    setModalOpen(true);
  };

  return (
    <div className="Folder" onClick={handleClick}>
      <div className="appIcon">
        <FontAwesomeIcon icon={iconImg ? iconImg : faFolderOpen} />
        {/* <FontAwesomeIcon icon={iconImg} /> */}
      </div>
      <p className="row align-items-center justify-content-center folderName p-0 m-0 ms-2">{name}</p>

      {/* 모달 */}
      {modalOpen && ModalComponent && (
        <ModalComponent />
      )}
    </div>
  );
  };

export default Folder;
