import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import translations from "../i18n";
import sections from "./sections";

function toEnglishNumerals(str) {
  if (typeof str !== 'string') {
    return str;
  }
  const numeralMap = {
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
    '୦': '0', '୧': '1', '୨': '2', '୩': '3', '୪': '4', '୫': '5', '୬': '6', '୭': '7', '୮': '8', '୯': '9',
    '౦': '0', '౧': '1', '౨': '2', '౩': '3', '౪': '4', '౫': '5', '౬': '6', '౭': '7', '౮': '8', '౯': '9',
    '೦': '0', '೧': '1', '೨': '2', '೩': '3', '೪': '4', '೫': '5', '೬': '6', '೭': '7', '೮': '8', '೯': '9',
  };
  return str.replace(/[०-९୦-୯౦-౯೦-೯]/g, (match) => numeralMap[match]);
}


function Preview({ form, onEdit, onSubmit }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const currentLang = form.language || "en";
  const t = translations[currentLang];

  const getAnswerLabel = (q, value) => {
    let label = "-";
    if (q.notApplicableValue !== undefined && value === q.notApplicableValue) {
      label = t.messages.notApplicable;
    } else if (!isNaN(value) && value >= 0 && value <= 3) {
      const opt = q.options?.[currentLang]?.[value];
      if (typeof opt === "string") {
        label = `${value} - ${opt}`;
      }
    }
    return toEnglishNumerals(label);
  };

  const userDetails = [
    { label: t.contact.fullName, value: form.fullName },
    { label: t.contact.email, value: form.email },
    { label: t.contact.whatsapp, value: form.whatsapp },
    { label: t.contact.date, value: form.date },
    { label: t.apartment.name, value: form.buildingName },
    { label: t.apartment.map, value: form.mapLink },
    { label: t.apartment.units, value: form.unitsCount },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 6 }}>
      <Paper
        elevation={3}
        sx={{ p: 5, width: "100%", maxWidth: "1200px", borderRadius: 3 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          {toEnglishNumerals(t.messages.previewTitle)}
        </Typography>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            {toEnglishNumerals(t.contact.title)} & {toEnglishNumerals(t.apartment.title)}
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table size="small">
              <TableBody>
                {userDetails.map((item) => (
                  <TableRow key={item.label}>
                    <TableCell sx={{ fontWeight: 600, width: "30%" }}>
                      {toEnglishNumerals(item.label)}
                    </TableCell>
                    <TableCell>
                      {item.value !== undefined && item.value !== null
                        ? toEnglishNumerals(String(item.value))
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {sections.map((section, sIdx) => (
          <Box key={sIdx} sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{ color: "#1976d2", mb: 2, fontWeight: 500 }}
            >
              {toEnglishNumerals(section.title[currentLang])}
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {toEnglishNumerals(t.buttons.question || "Question")}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {toEnglishNumerals(t.buttons.selectedAnswer || "Selected Answer")}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.questions.map((q) => {
                    return (
                      <TableRow key={q.key}>
                        <TableCell>{toEnglishNumerals(q.label[currentLang])}</TableCell>
                        <TableCell>
                          {getAnswerLabel(q, form[q.key])}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}

        <Box sx={{ mt: 10, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" color="primary" onClick={onEdit}>
            {toEnglishNumerals(t.buttons.edit)}
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setConfirmOpen(true)}
          >
            {toEnglishNumerals(t.buttons.submit)}
          </Button>
        </Box>

        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>{toEnglishNumerals(t.buttons.confirm || "Confirm Submission")}</DialogTitle>
          <DialogContent sx={{ mt: 1, mb: 1 }}>
            {toEnglishNumerals(t.messages.confirmSubmit)}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>
              {toEnglishNumerals(t.buttons.cancel)}
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                setConfirmOpen(false);
                onSubmit();
              }}
            >
              {toEnglishNumerals(t.buttons.confirm)}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default Preview;