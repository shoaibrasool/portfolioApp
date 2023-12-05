import './portfolio.css'
import { useEffect, useState } from 'react';
import { fetchRepositories } from '../../assets/githubApi';

const Portfolio = () => {


    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const username = 'shoaibrasool ';

        fetchRepositories(username)
            .then((data) => setRepositories(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <hr />
            <div className="cards">
                {repositories.map((repo) => (
                    <div className="card" key={repo.id}>
                        <button>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
