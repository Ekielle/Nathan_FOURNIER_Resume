import ExperienceModel from "../models/ExperienceModel";
import { Accordion, AccordionTab } from "primereact/accordion";


type ExperienceProps = {
    experience: ExperienceModel;
}

const Experience: React.FC<ExperienceProps> = ({experience} : ExperienceProps) => {
    return (
        <div className="card flex justify-content-center">
            <div className="card flex justify-content-center">
            <Accordion style={{ flexBasis: "50rem" }}>
                <AccordionTab header="Simple Description">
                    <div className="flex flex-column">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <strong>{experience.title}</strong> - {experience.company} ({experience.startDate} - {experience.endDate ?? "Present"})
                            <p>{experience.context}</p>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab header="Mission Description">
                    <div className="flex flex-column">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <p>{experience.mission}</p>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab header="Tech Environment">
                    <div className="flex flex-column">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <p>{experience.tech_Environnement}</p>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
        </div>
        )
}

export default Experience;