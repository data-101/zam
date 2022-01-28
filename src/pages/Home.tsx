import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ProductList } from '../components/ProductList';
import { Product } from '../model/Product';
import { getProducts } from '../store/ProductStore';
import './Home.css';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [producList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    setProductList(getProducts());
  }, []);

  const filter = (e: React.KeyboardEvent<HTMLIonSearchbarElement>) => {

    if (e.key != 'Enter') {
      return;
    }
    setProductList(getProducts(searchText));
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ZAM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonSearchbar inputmode="search" onIonChange={e => setSearchText(e.detail.value!)} onKeyPress={filter}></IonSearchbar>
        < ProductList products={producList} />
      </IonContent >
    </IonPage >
  );
};

export default Home;
