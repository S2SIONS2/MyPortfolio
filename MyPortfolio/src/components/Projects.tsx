import './Projects.scss';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Folder from './Folder';
import DailyDiary from '../pages/DailyDiary';
import BueaLine from '../pages/BueaLine';
import RandomCypher from '../pages/RandomCypher';
import TagWords from '../pages/TagWords';
import { useState } from 'react';

const Projects: React.FC = () => {
    const [selectedFolder, setSelectedFolder] = useState(0);

    const folders = [
        { iconImg: faFolder, name: 'DailyDiary', modalName: DailyDiary },
        { iconImg: faFolder, name: 'BueaLine', modalName: BueaLine },
        { iconImg: faFolder, name: 'RandomCypher', modalName: RandomCypher },
        { iconImg: faFolder, name: 'TagWords', modalName: TagWords },
    ]
    
    const handleFolderClick = (index: number) => {
        setSelectedFolder(index);
    };

    return (
        <div className='Projects'>
            <ul className='p-0'>
                {
                    folders.map((folder, index) => (
                        <li className={`row align-items-center g-0 folder ${
                            selectedFolder === index ? 'on' : ''
                          }`} 
                          key={index}
                          onClick={() => handleFolderClick(index)}
                          >
                            <Folder iconImg={selectedFolder === index ? faFolderOpen : folder.iconImg} name={folder.name} modalName={folder.modalName} isFirst = {index === 0}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Projects;