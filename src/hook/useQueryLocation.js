import { useLocation } from "react-router-dom";

import queryString from "query-string";

export default function useQueryLocation() {
  const location = useLocation();
  const query = queryString.parse(location?.search);
  return { query, location };
}
