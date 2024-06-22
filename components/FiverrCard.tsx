import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { FiverrType } from "../types/sections";
import Fade from "react-reveal/Fade";

const FiverrCard = ({ name, jobTitle, description, url }: FiverrType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4 bg-light">
      <CardBody>
        <a href={url} rel="nofollow" target="_blank" style={{ display: "inline-block" }}>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-dark">{name}</h5>
              <h6>{jobTitle}</h6>
              <p className="description mt-3 text-dark">{description}</p>
              <Badge color="success" className="mr-1">
                Fiverr Seller
              </Badge>
            </div>
          </div>
        </a>
      </CardBody>
    </Card>
  );
};

export default FiverrCard;
