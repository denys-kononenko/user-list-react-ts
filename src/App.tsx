import './App.css';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className="App is-flex is-justify-content-center is-align-items-center">
      <Outlet />
    </div>
  );
}
