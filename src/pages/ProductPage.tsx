import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './ProductPage.scss'

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp, wifi } from 'ionicons/icons';


import { Product } from '../model/Product';
import { getProductById } from '../store/ProductStore';


interface OwnProps extends RouteComponentProps {
    id?: string;
};

interface StateProps { };

interface DispatchProps { };

interface productDetailProps extends OwnProps, StateProps, DispatchProps { };

interface ProductPageProp
    extends RouteComponentProps<{
        id: string;
    }> { }

const ProductPage: React.FC<ProductPageProp> = ({ match }) => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
    const [actionSheetHeader, setActionSheetHeader] = useState('');

    const [product, setProduct] = useState<Product>({ id: '1', name: '', description: '', rating: 0 });

    useEffect(() => {
        setProduct(getProductById(match.params.id))
    }, [])


    function openproductShare(product: Product) {
        setActionSheetButtons([
            {
                text: 'Copy Link',
                handler: () => {
                    console.log('Copy Link clicked');
                }
            },
            {
                text: 'Share via ...',
                handler: () => {
                    console.log('Share via clicked');
                }
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }
        ]);
        setActionSheetHeader(`Share ${product.name}`);
        setShowActionSheet(true);
    }



    function openExternalUrl(url: string) {
        window.open(url, '_blank');
    }

    if (!match) {
        return <div>product not found</div>
    }

    return (
        <IonPage id="product-detail">
            <IonContent>
                <IonHeader className="ion-no-border">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <div className="product-background">
                    <img src={wifi} alt={product.name} />
                    <h2>{product.name}</h2>
                </div>

                <div className="ion-padding product-detail">
                    <p><b>Description:</b> {product.description}</p>

                    <hr />

                </div>
            </IonContent>
            <IonActionSheet
                isOpen={showActionSheet}
                header={actionSheetHeader}
                onDidDismiss={() => setShowActionSheet(false)}
                buttons={actionSheetButtons}
            />
        </IonPage>
    );
};


export default ProductPage
