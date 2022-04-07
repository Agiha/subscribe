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
      title:'What is subscribe feature?',
      content:"It's an integration between The APIS and Twitter. This feature allows users to follow the trending tweets based on their desired keywords in recent Tweets."
    },
    {
      title:'Who can use our subscribe function ?',
      content:"Anyone can sign up to have a newsletter for now. In the future, this feature will be exclusive to premium members. Note: Signing up for and using The APIS subscribe is subject to The APIS’s Terms of Service and Privacy Policy. "
    } ,{
      title:'How do I set up my The APIS account?',
      content:'Connect your wallet and then type in your email address at the bottom to set up. '
    },
    {
      title:'What kind of tweets are shared?',
      content:'The APIS offers several trending tweets which include the keyword you care about.'
    },
    {
      title:'How do users subscribe newsletter?',
      content:'They can check trending tweets by typing in the keyword on the explore page. On the subscribe page, users can subscribe by clicking "subscribe" bottoun besides hot hashtag or typing in the keyword of the tweets they want to subscribe to.'
    },
    {
      title:'How do readers unsubscribe from a newsletter?',
      content:'They can tap or click on the Unsubscribe or Manage subscription link in any email received from The APIS. '
    },
    {
      title:'Are there any rules regarding  newsletter content?',
      content:'All content published follow the  Terms of Service and Privacy Policy, and the Twitter Rules and policies. The APIS is intended to support a wide range of editorial content, but it is not meant to be used for publications that primarily exist to host promotions, giveaways, or similar activities.'
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
