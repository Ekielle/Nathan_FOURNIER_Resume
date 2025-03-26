import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

const Profile: React.FC = () => {
    return (
        <Card title="Nathan Fournier" subTitle="Full Stack Developer" style={{ marginBottom: '2rem' }}>
            <p>
                Passionate developer with experience in building modern web applications using React, Node.js, and
                other cutting-edge technologies. Skilled in creating responsive and user-friendly interfaces.
            </p>
            <Button label="Download Resume" icon="pi pi-download" className="p-button-outlined" />
        </Card>
    );
}

export default Profile;