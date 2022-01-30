import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { Auth } from 'aws-amplify';

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPasword] = useState<string>();
  const [signedIn,setSignedIn]= useState<boolean>(false);

  const login=()=>{
    Auth.signIn(username!, password).then(res=> {console.log(res);setSignedIn(true)}).catch(err=>console.log(err));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {/* <IonItemDivider>Default Input with Placeholder</IonItemDivider> */}
          <IonItem>
            <IonInput value={username} placeholder="Enter Username" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} placeholder="Enter Password" type="password" onIonChange={e => setPasword(e.detail.value!)}></IonInput>
          </IonItem>
        <IonButton onClick={login}>Submit</IonButton>
         {signedIn && <p>Congrats You Have Successfully Signed In!</p>}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;