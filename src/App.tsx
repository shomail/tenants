import { useState } from 'react';
import { Overview } from './pages';
import { Header, AppLayout, CreateForm } from './components';

export default function App() {
  const [isCreateForm, setIsCreateForm] = useState(false);
  return (
    <AppLayout>
      <Header showCreteForm={() => setIsCreateForm(true)} />
      <CreateForm isOpen={isCreateForm} handleClose={() => setIsCreateForm(false)} />
      <Overview />
    </AppLayout>
  );
}
