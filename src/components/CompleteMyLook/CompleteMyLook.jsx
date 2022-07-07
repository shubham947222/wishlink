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
        <Accordion style={{ width: 400, borderRadius: 10 }}>
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
              <div className="ArcdName"></div>
              {ArcdName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ width: 400, borderRadius: 10, backgroundColor: "#f2f2f2" }}
          >
            <ProductsCards />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: 400, borderRadius: 10 }}>
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
              {ArcdName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ width: 400, borderRadius: 10, backgroundColor: "#f2f2f2" }}
          >
            <ProductsCards />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CompleteMyLook;
