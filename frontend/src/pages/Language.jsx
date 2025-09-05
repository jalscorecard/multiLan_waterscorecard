import React from "react";
import { Button, Box, Typography } from "@mui/material";

export default function Language({ onNext, onBack, form, setForm }) {
  const handleSelect = (lang) => {
    setForm((prev) => ({ ...prev, language: lang }));
    onNext();
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Select Language
      </Typography>
      <Button variant="contained" onClick={() => handleSelect("en")} sx={{ m: 1 }}>
        English
      </Button>
      <Button variant="contained" onClick={() => handleSelect("hi")} sx={{ m: 1 }}>
        हिंदी
      </Button>
      <Button variant="contained" onClick={() => handleSelect("mr")} sx={{ m: 1 }}>
        मराठी
      </Button>
      <Button variant="contained" onClick={() => handleSelect("te")} sx={{ m: 1 }}>
        తెలుగు
      </Button>
      <Button variant="contained" onClick={() => handleSelect("kn")} sx={{ m: 1 }}>
        ಕನ್ನಡ
      </Button>
      <Button variant="contained" onClick={() => handleSelect("or")} sx={{ m: 1 }}>
        ଓଡ଼ିଆ
      </Button>
    </Box>
  );
}
