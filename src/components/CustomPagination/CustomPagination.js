import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import useQueryLocation from "../../hook/useQueryLocation";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function CustomPagination(props) {
  const { totalPages } = props;
  const { location, query: search } = useQueryLocation();
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = React.useState(location?.page || 1);
  const handleChange = (event, value) => {
    setPage(value);
    search.page = value;
    const params = queryString.stringify(search);
    const url = `${location?.pathname}?${params}`;
    history.push(url);
  };

  return (
    totalPages > 1 && (
      <div className={classes.root}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          classes={{ul:classes.pagination}}
        />
      </div>
    )
  );
}
