import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { App } from "./App";
import { UserList } from "./components/UserList";
import { UserInfo } from "./components/UserInfo";
import { UsersProvider } from "./contexts/UsersContext";

export const Root: React.FC = () => (
  <UsersProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UserList />} />
          <Route path="users/:id" element={<UserInfo />} />
        </Route>
      </Routes>
    </Router>
  </UsersProvider>
);
