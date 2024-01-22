import { Link } from "react-router-dom";

export const ErrorMessage: React.FC = () => (
  <div className="is-flex is-flex-direction-column is-align-items-center">
    <p className="has-text-danger-dark mb-3">
      Проблеми з завантаженням даних. Спробуйте ще раз пізніше.
    </p>

    <Link to={"/"} className="button is-small is-link">На головну</Link>
  </div>
)
