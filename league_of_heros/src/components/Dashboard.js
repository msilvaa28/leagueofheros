import "./Dashboard.css";
import { DashboardTable } from "./DashboardTable";
import { NavLink } from "react-router-dom";
import { PUBLIC_ID } from "../shared/api";
export const Dashboard = (props) => {
  const [list_of_heroes, setListOfHeroes] = props.herois;
  const [favoriteHeroes, setFavoriteHeroes] = props.favoriteHeroes;
  const user = props.user;
  const apagarHeroi = (id) => {
    if (favoriteHeroes.includes(id)) {
      setFavoriteHeroes(favoriteHeroes.filter((favorite) => favorite !== id));
    }
    setListOfHeroes(list_of_heroes.filter((hero) => hero.id !== id));
  };

  const addRemoveHeroi = (id) => {
    if (favoriteHeroes.includes(id)) {
      setFavoriteHeroes(favoriteHeroes.filter((favorite) => favorite !== id));
    } else {
      setFavoriteHeroes(favoriteHeroes.concat(id));
    }
  };

  return (
    <section>
      <div className="container">
        <center>
         <h1>Super Herois</h1>
        </center>
        ‎ ‎  {user === PUBLIC_ID ? (<button disabled={PUBLIC_ID !== user}>
          <NavLink to="/dashboard/add">Adicionar</NavLink>
        </button>):("")}
        <div className="tabelas">
          {list_of_heroes.map((heroi) => {
            return (
              <DashboardTable
                key={heroi.id}
                hero={heroi}
                apagar={apagarHeroi}
                user={user}
                favoritos={[addRemoveHeroi, favoriteHeroes]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
