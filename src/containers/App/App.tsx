import { BrowserRouter } from 'react-router-dom';
import { LayoutPage } from 'components/Layout/Layout'
import { RouterConfig } from '../../routes/routesConfig';

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
