import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/contributions", async (req, res) => {
  const today = new Date().toISOString().split("T")[0];
  const REPOS = process.env.GITHUB_REPOS?.split(",") || [];
  const USERNAME = process.env.GITHUB_USERNAME;
  const TOKEN = process.env.GITHUB_TOKEN;
  const contributions = [];

  try {
    const results = await Promise.all(
      REPOS.map(async (repo) => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${USERNAME}/${repo}/commits?author=${USERNAME}`,
            {
              headers: { Authorization: `Bearer ${TOKEN}` },
            }
          );

          if (!response.ok) return [];

          const commits = await response.json();
          if (!Array.isArray(commits)) return [];

          return commits
            .filter((c) => c.commit.author.date.startsWith(today))
            .map(
              (c) =>
                `committed "${c.commit.message}" to ${repo} (${c.html_url})`
            );
        } catch (err) {
          console.error(`error fetching ${repo} commits:`, err);
          return [];
        }
      })
    );

    results.forEach((arr) => contributions.push(...arr));
    res.json({ contributions });
  } catch (err) {
    console.error("internal error", err);
    res.status(500).json({ error: "failed to fetch contributions" })
  }
});

export default router;
