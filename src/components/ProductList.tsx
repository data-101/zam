import React from 'react';
import { IonList, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Product } from '../model/Product';


interface ProductProps {
    products: Product[];
}

export const ProductList: React.FC<ProductProps> = ({ products }) => {

    const itemList = () => {
        return products.map((product) => (
            <IonItem>
                <IonIcon icon={wifi} slot="start" />
                <IonLabel>{product.name}</IonLabel>
            </IonItem>
        )
        )
    }

    return (
        <IonContent>
            {/*-- List of Text Items --*/}
            {/* <IonList>
                <IonCard>
                    {itemList()}
                </IonCard>
            </IonList> */}
            <IonGrid fixed>
                <IonRow>
                    {products.map(product => (
                        <IonCol size="12" size-md="6" key={product.id}>
                            <IonCard className="speaker-card">
                                <IonCardHeader>
                                    <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/product/${product.id}`}>
                                        <IonAvatar slot="start">
                                            <img src={wifi} alt="Speaker profile pic" />
                                        </IonAvatar>
                                        <IonLabel>
                                            <h2>{product.name}</h2>
                                        </IonLabel>
                                    </IonItem>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </IonContent >
    )
};