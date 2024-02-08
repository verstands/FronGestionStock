import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Dashboad from "../pages/Dashboad"
import Achat from "../pages/Achat"
import Vente from "../pages/Vente"
import Caisse from "../pages/Caisse"
import Etat from "../pages/Etat"
import Maintenance from "../pages/Maintenance"
import Parametre from "../pages/Parametre"
import Statistique from "../pages/Statistique"
import AddAchat from "../components/AchatComponent/AddAchat"
import Fournisseur from "../pages/Fournisseur"
import AddFournisseur from "../components/Fournisseur/AddFournisseur"
import TableCommande from "../components/Approvisionnement/TableCommande"
import Addcommande from "../components/Approvisionnement/Addcommande"
import SuiviCommande from "../components/Approvisionnement/SuiviCommande"
import GestionFacture from "../components/Approvisionnement/GestionFacture"
const Routers = () => {
  return (
    <>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboad />} />
                <Route path="/achat" element={<Achat />} />
                <Route path="/addArticle" element={<AddAchat />} />
                <Route path="/fournisseur" element={<Fournisseur />} />
                <Route path="/addfournisseur" element={<AddFournisseur />} />
                <Route path="/commande" element={<TableCommande />} />
                <Route path="/addcommande" element={<Addcommande />} />
                <Route path="/suivicommande" element={<SuiviCommande />} />
                <Route path="/GestionFacture" element={<GestionFacture />} />
                <Route path="/vente" element={<Vente />} />
                <Route path="/caisse" element={<Caisse />} />
                <Route path="/etat" element={<Etat />} />
                <Route path="/maintenance" element={< Maintenance />} />
                <Route path="/parametre" element={<Parametre />} />
                <Route path="/statistique" element={<Statistique />} />
            </Route>
        </Routes>
    </>
  )
}

export default Routers