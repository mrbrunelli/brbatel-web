import { useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import Card from "../components/Card";
import styles from "../styles/pages/HomePage.module.css";

const HomePage = () => {
  const [companies, setCompanies] = useState([]);

  const findAll = async () => {
    try {
      const response = await api.get("/companies");
      const { companies } = response.data;
      setCompanies(companies);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <div>
      <p>Empresas</p>
      <div className={styles.container}>
        {companies.map((c: any) => (
          <Card
            key={c.id}
            id={c.id}
            title={c.name}
            description={c.about}
            imgSrc="https://via.placeholder.com/150"
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage
