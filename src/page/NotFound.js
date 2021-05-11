import React from "react";
import Layout from "../components/Layout/Layout";
import {} from '../assets/css/notfound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column align-items-center notfound">
          <h2>Opps! Page not found.</h2>
          <h1>404</h1>
          <p>page not found</p>
          <Link to="/" className="btn btn-outline-primary rounded-pill color-white">go back home </Link>
        </div>
      </div>
    </Layout>
  );
}
