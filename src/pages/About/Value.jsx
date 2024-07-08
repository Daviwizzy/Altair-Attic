import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <div className="values-wrapper">
      <div className="values-container">
        <div className="values-left">
          <div className="values-images">
            <img src="/S1.jpg" alt="Image 1" className="image image1" />
            <img src="/value.jpeg" alt="Image 2" className="image image2" />
          </div>
        </div>

        <div className="values-right">
          <h2 className="primaryText">Our Values</h2>
          <div className="orangeLine"></div>
          <p className="secondaryText">
            We believe in a set of core values that drive our mission and shape our company culture.
          </p>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) => (
                          <div className="flexCenter icon">
                            {item.icon}
                          </div>
                        )}
                      </AccordionItemState>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;