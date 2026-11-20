import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button";

export const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Страница не найдена.</p>
    <Link to="/">
      <Button variant="primary">На главную</Button>
    </Link>
  </div>
);
