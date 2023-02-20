import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Requirements = () => {
  return (
    <>
      <Box
        sx={{
          px: { lg: 48, md: 20, sx: 0 },
          pt: { lg: 5, md: 20, sx: 0 },
        }}
      >
        <Typography
          textAlign="center"
          py={3}
          sx={{
            fontSize: { lg: "1.2rem", md: "1rem", sm: "1rem" },
            fontWeight: "bold",
          }}
        >
          Requirements Per Transaction
        </Typography>
        <Box px={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                ISSUANCE OF CERTIFIED TRUE COPY OF REGISTRATION CARD
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request letter</li>
                  <li>Payment - ₱ 150. 00 Per Documents</li>
                  <li>One Documentary Stamp per CTC</li>
                  <li>Same day Process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ISSUANCE OF Duplicate Copy of Registration card
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request letter</li>
                  <li>
                    Application Form for Duplicate Copy of Registration
                    Certificate
                  </li>
                  <li>Payment - ₱ 150. 00 Per Documents</li>
                  <li>
                    One Documentary Stamp per Duplicate Copy of Registration
                    Card.
                  </li>
                  <li>Same day Process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ISSUANCE OF CERTIFICATE OF ENROLLMENT</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request letter</li>
                  <li>Payment - ₱ 150. 00</li>
                  <li>Clearance for previous semester</li>
                  <li>One Documentary Stamp per C.O.E</li>
                  <li>Same day Process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ISSUANCE OF PERMIT TO CROSS ENROLL COURSE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Approved Letter</li>
                  <li>Payment - ₱ 150. 00 </li>
                  <li>Cross-enroll form </li>
                  <li>One Documentary Stamp</li>
                  <li>SOne Day Process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ISSUANCE OF CERTIFICATION, AUTHENTICATION AND VERIFICATION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Payment Local CAV ₱ 620, DFA ₱ 920</li>
                  <li>Photo Copy of TOR and Diploma</li>
                  <li>Documentary Stamp Local 1pc, DFA 4 Pcs </li>
                  <li>One Documentary Stamp</li>
                  <li>5 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ISSUANCE OF STUDENT VERIFICATION </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Photo Copy of TOR and Diploma</li>
                  <li>Authorization Letter</li>
                  <li>Original Receipt</li>
                  <li> Payment ₱ 200.00</li>
                  <li> One Documentary Stamp</li>
                  <li>1 week process </li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ISSUANCE OF CERTIFIED TRUE COPY of TOR, Diploma and General
                Weighted Average for Graduate Students
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt</li>
                  <li>Photo Copy of TOR and Diploma</li>
                  <li>Payment ₱ 150.00</li>
                  <li>One Documentary Stamp</li>
                  <li>1 day process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE STUDENT
                Requirements for TOR Employment for Undergraduate
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt </li>
                  <li>General Clearance </li>
                  <li>2x2 Picture (2Pcs)</li>
                  <li>Photo copy of Last Registration Card </li>
                  <li>Payment ₱ 100.00 per page </li>
                  <li>One Documentary Stamp </li>
                  <li>7 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {" "}
                ISSUANCE OF TRANSCRIPT OF RECORD FOR GRADUATE STUDENTS
                Requirements for TOR Employment for graduate/H.D/Further
                studies/ evaluation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt</li>
                  <li>General Clearance </li>
                  <li> 2x2 Picture (2Pcs)</li>
                  <li> Payment ₱ 350.00 per set, ₱ 450.00 for CE</li>
                  <li> One Documentary Stamp</li>
                  <li>7 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {" "}
                ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE STUDENT
                Requirements for TOR Evaluation / Re-Admission
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt</li>
                  <li>General Clearance </li>
                  <li>2x2 Picture (2Pcs)</li>
                  <li>ID</li>
                  <li>Registration Card</li>
                  <li>Payment ₱ 100.00 per page </li>
                  <li>One Documentary Stamp</li>
                  <li>7 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE STUDENT
                Requirements for TOR Honorable Dismissal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt</li>
                  <li>General Clearance </li>
                  <li>2x2 Picture (2Pcs)</li>
                  <li>Photocopy of last registration card</li>
                  <li>Registration Card</li>
                  <li>Payment ₱ 100.00 per page </li>
                  <li>7 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {" "}
                ISSUANCE OF TRANSCRIPT OF RECORD FOR Graduate Students
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>General Clearance </li>
                  <li>Certificate of Candidacy</li>
                  <li>ID</li>
                  <li>Dummy Diploma</li>
                  <li>Original Receipt </li>
                  <li>Last Registration Card</li>
                  <li>Clearance</li>
                  <li>7 days Process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> ISSUANCE OF CERTIFICATE OF GRADES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li>Request Letter</li>
                  <li>Original Receipt</li>

                  <li>One Documentary Stamp</li>
                  <li>Payment ₱ 150.00</li>
                  <li>7 days process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ISSUANCE OF CERTIFICATE OF REGISTRATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol style={{ padding: "5px 30px" }}>
                  <li> Latest registration Card</li>
                  <li>Clearance </li>
                  <li> Payment ₱ 150.00</li>
                  <li>1 day process</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default Requirements;
