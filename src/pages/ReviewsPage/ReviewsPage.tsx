import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";

export const Main = () => (
  <div>
    <h1>Главная</h1>
    <p>Добро пожаловать на страницу рецензий.</p>
    <div style={{ display: "flex", gap: 8 }}>
      <Link to="/">
        <Button variant="primary">на главную</Button>
      </Link>
    </div>
  </div>
);
