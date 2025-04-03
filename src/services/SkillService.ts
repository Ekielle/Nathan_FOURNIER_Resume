import SkillModel from "../models/SkillModel";

const mockSkill = [
    {
        title: "C#",
    },
    {
        title: "SQL",
    },
    {
        title: ".NET",
    },
    {
        title: "Visual Studio",
    },
    {
        title: "Unity",
    },
    {
        title: "GIT",
    }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GetSkill = async (): Promise<SkillModel[]> => {
    await delay(1000);
    return mockSkill;
}