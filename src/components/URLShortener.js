
import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function URLShortener() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [shortLinks, setShortLinks] = useState([]);

  const handleShorten = () => {
    if (!url) return;

    const code = shortcode || Math.random().toString(36).substr(2, 5);
    const expiresAt = new Date(Date.now() + ((validity || 30) * 60000));

    setShortLinks([
      ...shortLinks,
      { original: url, short: `http://short.ly/${code}`, expires: expiresAt.toLocaleTimeString() }
    ]);

    setUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>React URL Shortener</Typography>
      <TextField label="Long URL" value={url} onChange={(e) => setUrl(e.target.value)} fullWidth margin="normal" />
      <TextField label="Validity (mins)" value={validity} onChange={(e) => setValidity(e.target.value)} fullWidth margin="normal" />
      <TextField label="Custom Shortcode" value={shortcode} onChange={(e) => setShortcode(e.target.value)} fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleShorten} style={{ marginTop: 10 }}>Shorten URL</Button>

      <div style={{ marginTop: 20 }}>
        {shortLinks.map((link, index) => (
          <Card key={index} style={{ marginBottom: 10 }}>
            <CardContent>
              <Typography>🔗 <b>{link.short}</b></Typography>
              <Typography>🌐 Original: {link.original}</Typography>
              <Typography>⏰ Expires at: {link.expires}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default URLShortener;
