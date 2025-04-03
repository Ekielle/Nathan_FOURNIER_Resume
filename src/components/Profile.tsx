import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

const Profile: React.FC = () => {
    return (
        <Card title="Nathan Fournier" subTitle="Full Stack Developer" style={{ marginBottom: '2rem' }}>
            <p>
                Développeur depuis 9 ans, j'ai eu l'occasion de travailler dans plusieurs domaines tels que le développement de logiciels embarqués, l'édition de logiciels ou encore le développement d'un système de gestion de contenu (CMS).
            </p>
            <Button label="Download Resume" icon="pi pi-download" className="p-button-outlined" />
        </Card>
    );
}

export default Profile;