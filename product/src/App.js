//liste des imports necessaires
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Description} from "./components/Description";
import { Name} from "./components/Name";
import { Price} from "./components/Price";
import { Image} from "./components/Image";
import "./App.css";

//Voici une boite de dialogue qui recueille votre prenom
let name = prompt("Entrez votre prénom");
name = name.trim();

//Voici une fonction qui affiche le produit avec toutes ses caracteristique. Elle renvoie aussi une photo lorsque le nom est specifié.
function App() {

  return (
   
    <div className="myApp">
      <Card style={{ width: "18rem" }} className="myCard">
        <Image/>
        <Card.Body>
          <Card.Title><Name/></Card.Title>
          <Card.Text>
            <Description/>
                 <Price/>             
          </Card.Text>
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>

      <h3>Hello {name?name:"there !"}</h3>
         {name && <p className="profil"><img src="/profil.jpg" alt="profil"/></p>}
    </div>
  );
}

export default App;
