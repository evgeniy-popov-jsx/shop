import { BrowserRouter } from 'react-router-dom';
import { LayoutPage } from 'presentation/components/Layout/Layout'
import { RouterConfig } from 'application/routes/routesConfig';

function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <RouterConfig />
      </LayoutPage>
    </BrowserRouter>
  );
};

export default App
