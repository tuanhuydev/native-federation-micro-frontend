import { Suspense } from 'react'
// import { FeatureA } from '@namespace/remote/features/featureA/PageA';
import { App as RemoteApp } from '@namespace/remote/App';

console.log(RemoteApp);

function App() {

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
      </Suspense>      
  )
}

export default App
