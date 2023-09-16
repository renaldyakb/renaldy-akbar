// pages/api/notion-data.js

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY, // Ganti dengan token integrasi Notion Anda
});

export default async (req: any, res: any) => {
  if (req.method === "GET") {
    const databaseId = req.query.databaseId;
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
      });
      const results = response.results;
      res.status(200).json(results);
    } catch (error) {
      console.error("Error fetching data from Notion:", error);
      res.status(500).json({ error: "Error fetching data from Notion" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
