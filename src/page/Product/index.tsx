import * as React from "react";
import "./index.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderBox from "../../compoment/Header";

export default function BasicTimeline() {
  const FAQsData = [
    {
      title:'What is Substance?',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    },
    {
      title:'How does Substance work?',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    } ,{
      title:'Can I talk to real person to get my questions answered?',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    },
    {
      title:'In which country Substance available?',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    },
    {
      title:'How do i sign up with Substance',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    },
    {
      title:'How is our data being protected?',
      content:'Here for the first time? See how Substance can help from sales and marketing, to customer engagement and support.'
    },
  ];
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
        <HeaderBox></HeaderBox>

     <div className="FAQsBigBox">
       <div className="titleBox">
       FAQs
       </div>
       <div className="problemBox">
         {FAQsData.map((item,index) =>{
           return(
             <div>
      <Accordion expanded={expanded ===`panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {item.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
             </div>
           )
         })}
       </div>
       <div className="questionsBox">
         <div className="Title">
         Still have a questions?
         </div>
         <div className="contentBox">
         If you cannot find answer to your question in our FAQ, you can always
         </div>
         <div className="content">
           <span>
              contact us. 
           </span>
           
        We will answer to you shortly!
         </div>
       </div>
     </div>

    </>
  );
}
