import FormationModel from "../models/FormationModel";

const mockFormation = [
    {
        title: "Licence professionnelle de développement d'application mobile",
        startDate: "Septembre 2018",
        endDate: "Aout 2019",
        context: "Bac +3 en développement d'application mobile.",
    },
    {
        title: "DUT Informatique",
        startDate: "Septembre 2016",
        endDate: "Aout 2018",
        context: "Bac +2 en Informatique.",
    }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GetFormation = async (): Promise<FormationModel[]> => {
    await delay(1000);
    return mockFormation;
}