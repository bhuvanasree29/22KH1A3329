
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function URLStats() {
  const dummyData = [
    {
      short: "http://short.ly/abcd1",
      original: "https://example.com",
      expiry: "12:30 PM",
      clicks: [
        { time: "12:01 PM", source: "Facebook", location: "India" },
        { time: "12:02 PM", source: "Twitter", location: "India" }
      ]
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      {dummyData.map((link, index) => (
        <Card key={index} style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography><b>Short URL:</b> {link.short}</Typography>
            <Typography><b>Original URL:</b> {link.original}</Typography>
            <Typography><b>Expiry:</b> {link.expiry}</Typography>
            <Typography><b>Clicks:</b></Typography>
            {link.clicks.map((click, idx) => (
              <Typography key={idx}>- {click.time}, {click.source}, {click.location}</Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default URLStats;
