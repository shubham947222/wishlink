import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ProductsCards from "../ProductsCards/ProductsCard";
import "./completeMyLook.css";
const CompleteMyLook = ({ heading, ArcdName }) => {
  return (
    <>
      <div stlye={{}} className="CompleteMyLookComp">
        <h3 className="CompleteMyLookheading">{heading}</h3>
        <Accordion style={{ width: "25rem", borderRadius: "0.625rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: "bold",
                font: "Poppins",
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              <div className="ArcdName">{ArcdName}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "25rem",
              borderRadius: "0.625rem",
              backgroundColor: "#f2f2f2",
              padding: 0,
              height: "22rem",
            }}
            className="Accord"
          >
            <ProductsCards />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: " 25rem", borderRadius: "0.625rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: "bold",
                font: "Poppins",
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              <div className="ArcdName">{ArcdName}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "25rem",
              borderRadius: "0.625rem",
              backgroundColor: "#f2f2f2",
              padding: 0,
              height: "22rem",
            }}
            className="Accord"
          >
            <ProductsCards />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CompleteMyLook;
