const express = require('express');
const axios = require('axios');
const customRepos = require('./repos');

const app = express();
const PORT = 8080;

const GITHUB_API_URL = 'https://api.github.com';

app.get('/repos', async (req, res) => {
    try {
        const repoDataPromises = customRepos.map(async ({ owner, repo }) => {
            const response = await axios.get(`${GITHUB_API_URL}/repos/${owner}/${repo}`);
            const { name, html_url, stargazers_count, forks_count } = response.data;
            return { name, url: html_url, stars: stargazers_count, forks: forks_count };
        });

        const reposData = await Promise.all(repoDataPromises);

        const sortedRepos = reposData.sort((a, b) => {
            if (b.stars !== a.stars) {
                return b.stars - a.stars;
            }
            return b.forks - a.forks;
        });

        res.json(sortedRepos);
    } catch (error) {
        console.error('Error fetching repositories:', error.message);
        res.status(500).json({ message: 'Error fetching repositories' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
