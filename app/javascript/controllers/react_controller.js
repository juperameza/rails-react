import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";
// Connects to data-controller="react"
/* controller generated with rails g stimulus <controller_name> */
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus");
    const app = document.getElementById("app");
    createRoot(app).render(<App />);
  }
}
