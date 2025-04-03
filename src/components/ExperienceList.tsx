import { Panel } from "primereact/panel";
import Experience from "./Experience";
import ExperienceModel from "../models/ExperienceModel";
import { GetExperience as GetExperiences } from "../services/ExperienceService";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";


const ExperienceList : React.FC = () => {

    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

    useEffect(() => {
        GetExperiences().then((e) => {
            setExperiences(e)
        })
    }, []);

    return (
        <Panel header="Experiences" style={{ marginBottom: '2rem' }}>
        <div className="p-grid">
        {
            experiences.map((experience) => (
                <div key={`${experience.title}-${experience.title}`} className="p-col-12 p-md-6 p-lg-4">
                    <Card style={{ marginBottom: '24px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.75)' }}>
                        <Experience experience={experience} />
                    </Card>
                </div>
            ))
        }
        </div>
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