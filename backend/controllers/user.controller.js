export const getUserProfileandRepos = async (req, res) => {
  // res.send("User routes");
  const { username } = req.params;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    const reposRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await reposRes.json();

    res.status(200).json({ userProfile, repos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
