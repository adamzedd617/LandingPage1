import React from "react";
import "../styles/components/Subscribe.css";
import { Button } from "./Button";

function Subscribe() {
  return (
    <section className="footer-subscription">
      <p className="footer-subscription-heading">
        Join the Adventure newsletter to receive our best vacation deals
      </p>
      <p className="footer-subscription-text">
        You can unsubscribe at any time.
      </p>
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
