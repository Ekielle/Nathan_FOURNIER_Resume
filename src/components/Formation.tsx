import FormationModel from "../models/FormationModel";

type FormationProps = {
    formation: FormationModel;
}

const Experience: React.FC<FormationProps> = ({formation} : FormationProps) => {


    return (
        <>
            <strong>{formation.title}</strong> ({formation.startDate} - {formation.endDate ?? "Present"})
            < p > {formation.context}</p >
        </>
    );
}

export default Experience;