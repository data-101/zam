import { IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { calendar, people } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../store/ProductStore';
import './Home.css';

const ItemList: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Grocery List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>Coming Soon</p>

            </IonContent>
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
        </IonPage>
    );
};

export default ItemList;
