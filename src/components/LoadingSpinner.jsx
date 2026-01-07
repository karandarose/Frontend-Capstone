import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <FontAwesomeIcon icon="fa-snowflake" spin size="4x" />
    </div>
  );
}
