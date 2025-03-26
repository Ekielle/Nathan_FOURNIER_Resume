import ExperienceModel from "../models/ExperienceModel";

type ExperienceProps = {
    experience: ExperienceModel;
}

const Experience: React.FC<ExperienceProps> = ({experience} : ExperienceProps) => {


    return (
        <>
            <strong>{experience.title}</strong> - {experience.company} ({experience.startDate} - {experience.endDate ?? "Present"})
            < p > {experience.description}</p >
        </>
    );
}

export default Experience;