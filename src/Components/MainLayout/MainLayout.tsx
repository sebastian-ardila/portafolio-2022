import './MainLayout.css';

import Greetings from '../Greetings/Greetings';
import Laboral from '../Laboral/Laboral';

function MainLayout() {
  return (
    <div className="MainLayout">
        <Greetings/>
        <Laboral/>
    </div>
  );
}

export default MainLayout;
