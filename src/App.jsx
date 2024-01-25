import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { personList } from "./constants/fakeData";

function App() {
  //console.log(personList)

  const [aktifKullanici, setAktifKullanici] = useState(15);

  return (
    <div>
      <Header
        aktifKullaniciSayisi={aktifKullanici}
        setAktifKullanici={setAktifKullanici}
      />
      <div className="card-container">
        {personList.map((person) => (
          <Card personInfo={person} />
        ))}
      </div>
    </div>
  );
}

export default App;
