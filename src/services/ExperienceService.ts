import ExperienceModel from "../models/ExperienceModel";

const mockExperience = [
    {
        title: "Developer",
        company: "SILAE",
        startDate: "2022",
        endDate: "2022",
        description: "blablabla"
    },
    {
        title: "Consultant",
        company: "Adentis",
        startDate: "2022",
        description: "je suis la"
    }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GetExperience = async (): Promise<ExperienceModel[]> => {
    await delay(1000);
    return mockExperience;
}