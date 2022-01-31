import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { API } from "aws-amplify";
import { calendar, people } from "ionicons/icons";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../store/ProductStore";

interface Item {
  id: string;
  info: string;
}

//   let d: Item={id:"1",info:"Hello"}
//   API
// .post("groceryItems", "/items", {
//   body: d, // replace this with attributes you need
//   headers: {}, // OPTIONAL
// })
// .then(response => {
//   console.log(response)
// })
// .catch(error => {
//   console.log(error.response);
// });

const ItemList: React.FC = () => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [text, setText] = useState<string>();

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    API.get("groceryItems", "/items/1", {}).then((res) => setItemList(res));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    API.post("groceryItems", "/items", {
      body: { id: "1", info: text },
      headers: {},
    })
      .then((response) => {
        console.log(response);
        let a: Item = { id: "1", info: text! };
        updateData();
        // setItemList((at) => [...at, a]);
        setText("");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={addItem}>
          <IonInput
            value={text}
            placeholder="Enter Item"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
          <IonButton expand="block" type="submit">
            Add
          </IonButton>
        </form>
        {itemList.map((data) => (
          <p>{data.info}</p>
        ))}
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
