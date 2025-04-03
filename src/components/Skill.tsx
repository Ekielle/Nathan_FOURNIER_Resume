import SkillModel from "../models/SkillModel";
import { Chip } from 'primereact/chip';

type SkillProps = {
    skill: SkillModel;
}

const Experience: React.FC<SkillProps> = ({skill} : SkillProps) => {


    return (
        <>
            <Chip label = {skill.title} className="p-mr-2" style={{ marginRight: '5rem' }} />
        </>
    );
}

export default Experience;