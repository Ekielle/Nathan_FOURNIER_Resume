import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import "primereact/resources/themes/lara-light-blue/theme.css";
import Profile from './components/Profile';
import ExperienceList from './components/ExperienceList';

function App() {
  return (
    <PrimeReactProvider>
      <div className="resume-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Profile/>
        
        <ExperienceList/>

        {/* Contact Section */}
        <Panel header="Contact">
          <p>Email: nathan.fournier@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <Button label="Contact Me" icon="pi pi-envelope" className="p-button-success" />
        </Panel>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
