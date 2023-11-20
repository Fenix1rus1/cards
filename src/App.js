import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from '../src/components/PageViewSet';
import { PageCreateSet } from '../src/components/PageCreateSet';
import { PageSelectSet } from '../src/components/PageSelectSet';
import { FormCreateSet } from '../src/components/FormCreateSet';
import { FormCreateCard } from '../src/components/FormCreateCard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />}>
          <Route path="createset" element={<FormCreateSet />} />
          <Route path="createcard" element={<FormCreateCard />} />
        </Route>
        <Route path="*" element={<PageSelectSet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
