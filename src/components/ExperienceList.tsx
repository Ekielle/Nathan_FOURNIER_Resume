import { Panel } from "primereact/panel";
import Experience from "./Experience";
import ExperienceModel from "../models/ExperienceModel";
import { GetExperience as GetExperiences } from "../services/ExperienceService";
import { useEffect, useState } from "react";


const ExperienceList : React.FC = () => {

    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

    useEffect(() => {
        GetExperiences().then((e) => {
            setExperiences(e)
        })
    }, []);

    return (
        <Panel header="Experience" style={{ marginBottom: '2rem' }}>
          <ul>
            {
                experiences.map((experience) => (
                    <li key={`${experience.company}-${experience.title}`}>
                        <Experience experience={experience} />
                    </li>
                ))
            }
          </ul>
        </Panel>
    );
}

export default ExperienceList;

/*
<li>
                <Experience title={"Developer"} company={"SILAE"} startDate={"2022"} endDate={"2022"} description={"blablabla"} />
            </li>
            <li>
                <Experience title={"Consultant"} company={"Adentis"} startDate={"2022"} description={"je suis la"} />
            </li>*/