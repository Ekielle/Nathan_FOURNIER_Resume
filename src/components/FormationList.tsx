import { Panel } from "primereact/panel";
import Formation from "./Formation";
import FormationModel from "../models/FormationModel";
import { GetFormation as GetFormations } from "../services/FormationService";
import { useEffect, useState } from "react";


const FormationList : React.FC = () => {

    const [formations, setFormations] = useState<FormationModel[]>([]);

    useEffect(() => {
        GetFormations().then((e) => {
            setFormations(e)
        })
    }, []);

    return (
        <Panel header="Formations" style={{ marginBottom: '2rem' }}>
          <ul>
            {
                formations.map((formation) => (
                    <li key={`${formation.title}-${formation.title}`}>
                        <Formation formation={formation} />
                    </li>
                ))
            }
          </ul>
        </Panel>
    );
}

export default FormationList;