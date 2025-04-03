import ExperienceModel from "../models/ExperienceModel";

const mockExperience = [
    {
        title: "Consultant développeur",
        company: "Adentis",
        startDate: "Mai 2022",
        context: "Je suis actuellement en mission chez le client Carso LSEHL, je suis venu renforcer l'équipe de développement afin des réaliser des évolutions et des corrections de bugs. ",
        mission: `Mise en place de nouveaux exports de facturation. :

                Mise à jour des prix facturés aux clients.
                Correction de bug.
                Création de requête pour les utilisateurs.
                TMA.
                Gestion de 2 projets.
                Evolution des différentes solutions.
                Optimisation du code.
                Création de nouveaux flux avec snaplogic.
                Automatisation des augmentations annuelles des clients.
                Cartographie globale de la facturation et étude de migration de la facturation.
                
                Dans le cadre de ma mission j'ai réalisé 2 exports de données .
                Travail sur l'automatisation des augmentations de prix des clients mise en place des tests mi-juin.
                Cartographie globale de la facturation et étude de migration de la facturation, travaille à effectuer sur 1 an ou plus`,
        tech_Environnement: `    
            Outils : Visual Studio, SSMS, SVN tortoise, GLPI, LIMS, SnapLogic
            Langages : C#, SQL, JavaScript`

    },
    {
        title: "Développeur Logiciel",
        company: "SILAE",
        startDate: "Octobre 2020",
        endDate: "Avril 2022",
        context: "Je suis venu renforcer l'équipe de développement logiciel pour les aider à réaliser l'évolution et la correction de bugs de la solution. ",
        mission: `Mes différentes missions sont :
                Implémenter de nouvelles interfaces dans la solution.
                Correction de bugs et évolution de la DSN.
                Implémentation de nouveaux formulaires.
                Ajout de filtres afin d'optimiser l'analyse des différents dossiers de clients.
                Évolution de la solution au niveau de la paie.`,
        tech_Environnement: `    
            Outils : Visual Studio, Silae, MySQL Workbench.
            Langages : C#, SQL.`

    },
    {
        title: "Développeur",
        company: "Auto entrepreneur",
        startDate: "Spetembre 2019",
        endDate: "Spetembre 2020",
        context: "Suite à la fin de mes études, j'ai voulu me lancer dans un projet personnel.",
        mission: `Développement de jeux vidéo.`,
        tech_Environnement: `    
            Outils : Visual Studio, Unity, Blender, Photoshop, Trello, Discord et Git.
            Langages : C#.`

    },
    {
        title: "Développeur web",
        company: "Audiospot",
        startDate: "Spetembre 2018",
        endDate: "Août 2019",
        context: "Dans le cadre de mon alternance en licence pro, j'ai rejoint l'équipe de développement d'Audiospot.",
        mission: `Développeur web.
                    -Ma mission consistait à développer de manière autonome un logiciel de conversion de format de fichiers de données.
                    Réunion avec le client pour réaliser une étude de besoin.
                    Mise en place du cahier des charges techniques.
                    -Conception et développement de la solution.`,
        tech_Environnement: `    
            Outils : Sublime Text, Visual Studio.
            Langages : HTML, CSS, JavaScrit, JQuerry, kendo, C#.`

    },
    {
        title: "Développeur logiciel embarqués",
        company: "Base militaire d'Istres",
        startDate: "Octobre 2016",
        endDate: "Juillet 2018",
        context: "Dans le cadre de mon alternance en DUT, j'ai rejoint l'équipe de développement de la base militaire.",
        mission: `Développeur de logiciels embarqués.
                    -Ma mission consistait à développer de manière autonome un logiciel de conversion de format de fichiers de données.
                    Réunion avec le client pour réaliser une étude de besoin.
                    Mise en place du cahier des charges techniques.
                    -Conception et développement de la solution.`,
        tech_Environnement: `
            Outils : Visual Studio.
            Langage : C++, Qt Designer.`
    }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GetExperience = async (): Promise<ExperienceModel[]> => {
    await delay(1000);
    return mockExperience;
}