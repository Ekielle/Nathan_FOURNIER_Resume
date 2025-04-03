import ExperienceModel from "../models/ExperienceModel";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import React, { useRef } from "react";
import { Button } from 'primereact/button';


type ExperienceProps = {
    experience: ExperienceModel;
}

const Experience: React.FC<ExperienceProps> = ({experience} : ExperienceProps) => {
    const stepperRef = useRef<any>(null);


    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                <StepperPanel header="Simple description">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <strong>{experience.title}</strong> - {experience.company} ({experience.startDate} - {experience.endDate ?? "Present"})
                            < p > {experience.context}</p >
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Mission description">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            < p > {experience.mission}</p >
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" severity="secondary" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Tech Environment">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            < p > {experience.tech_Environnement}</p >
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
        )
}

export default Experience;