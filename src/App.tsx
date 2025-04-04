import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import Profile from './components/Profile';
import ExperienceList from './components/ExperienceList';
import FormationList from './components/FormationList';
import SkillList from './components/SkillList';
import ThemeSwitcher from './components/ThemeSwitcher';
import 'primeicons/primeicons.css';
import ThemeProvider from './provider/ThemeProvider';

function App() {
  return (
    <PrimeReactProvider>
      <ThemeProvider>
      <div className="resume-container" style={{ padding: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <Profile/>

        <ThemeSwitcher/>
        
        <ExperienceList/>

        <SkillList/>

        <FormationList/>

        {/* Contact Section */}
        <Panel header="Contact">
          <p>Email: nathan.fournier31@gmail.com</p>
          <p>Phone: 06 70 25 72 24</p>
          <Button label="Contact Me" icon="pi pi-envelope" className="p-button-success" />
        </Panel>
      </div>
      </ThemeProvider>
    </PrimeReactProvider>
  );
}

export default App;
