import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/facebook/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  //[] => useEffect será executado apenas uma vez

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
