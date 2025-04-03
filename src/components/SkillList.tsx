import { Panel } from "primereact/panel";
import SkillModel from "../models/SkillModel";
import { GetSkill as GetSkills } from "../services/SkillService";
import { useEffect, useState } from "react";
import { Chip } from "primereact/chip";


const SkillList : React.FC = () => {

    const [skills, setSkills] = useState<SkillModel[]>([]);

    useEffect(() => {
        GetSkills().then((e) => {
            setSkills(e)
        })
    }, []);

    return (
        <Panel header="Skills" style={{ marginBottom: '2rem' }}>
        <div className="p-grid">
        {
            skills.map((skill) => (
                <Chip key={`${skill.title}-${skill.title}`} label = {skill.title} className="p-col-12 p-md-6 p-lg-4" style={{ marginRight: '1rem' }}>
                </Chip>
            ))
        }
        </div>
        </Panel>
    );
}

export default SkillList;

/*
<li>
                <Experience title={"Developer"} company={"SILAE"} startDate={"2022"} endDate={"2022"} description={"blablabla"} />
            </li>
            <li>
                <Experience title={"Consultant"} company={"Adentis"} startDate={"2022"} description={"je suis la"} />
            </li>*/