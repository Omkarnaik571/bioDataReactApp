import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="row">
      <Card
        style={{
          width: "25rem",
          marginLeft: "15px",
          backgroundColor: "cornsil",
        }}
      >
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_1280.jpg"
        />
        <Card.Body>
          <Card.Title>Cryptocurrency Tracker Web App </Card.Title>
          <Card.Text>
            A cryptocurrency finance price tracker app in this React API
            Project. Use React Hook and Axios for this React JS Project. You
            will be able to search currencies and have it display on the
            browser. Also, the prices will update live whenever you refresh the
            page. We will get all of the data from a public API.
          </Card.Text>
          <Button
            variant="primary"
            href="https://crypto-currency-app.vercel.app/"
            alt="somewhere"
            target="blank"
          >
            Visit Application
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem", marginLeft: "15px" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/09/07/21/52/city-438393_1280.jpg"
        />
        <Card.Body>
          <Card.Title>Personal Portfolio Web App</Card.Title>
          <Card.Text>
            Personal Portfolio web application with React and Google Material
            Design . Styling using Figma and Framer.
          </Card.Text>
          <Button
            variant="primary"
            href="https://bio-data-react-app.vercel.app/"
            alt="somewhere"
            target="blank"
          >
            Visit Application
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
