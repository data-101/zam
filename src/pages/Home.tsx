import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { calendar, people, informationCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ProductList } from '../components/ProductList';
import { Product } from '../model/Product';
import { getProducts } from '../store/ProductStore';
import './Home.css';
import { Auth } from 'aws-amplify';


const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [producList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(searchText).then(products => setProductList(products));
    // Auth.signIn('test-1', 'HelloTest%1').then(res=> console.log(res)).catch(err=>console.log(err));
  }, []);

  const filter = (e: React.KeyboardEvent<HTMLIonSearchbarElement>) => {

    if (e.key != 'Enter') {
      return;
    }
    getProducts(searchText).then(products => setProductList(products));
  };


  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ZAM</IonTitle>
          <IonButton slot='end' href='/login'>Sign-in</IonButton>
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

      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/home">
          <IonIcon icon={calendar} />
          <IonLabel>Store</IonLabel>
        </IonTabButton>
        <IonTabButton tab="list" href="/list">
          <IonIcon icon={people} />
          <IonLabel>List</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage >



  );
};

export default Home;
