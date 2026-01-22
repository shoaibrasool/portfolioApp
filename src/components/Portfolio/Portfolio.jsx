import './portfolio.css'
import { useEffect, useState } from 'react';
import { fetchRepositories } from '../../assets/githubApi';

const Portfolio = () => {


    const [repositories, setRepositories] = useState([]);

    console.log(repositories);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const username = 'shoaibrasool';

        fetchRepositories(username)
            .then((data) => setRepositories(data))
            .catch((err) => {
                console.error('Error:', err);
                setError('Failed to load projects. Please try again later.');
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <hr />
            {loading && <p className="info">Loading featured projects...</p>}
            {error && !loading && <p className="error">{error}</p>}
            {!loading && !error && (
                                <div className="cards">
                                        {repositories.map((repo) => {
                                                const imgUrl = `https://source.unsplash.com/random/800x600/?technology,code,ai&sig=${repo.id}`;
                                                const fallback = `https://picsum.photos/seed/${repo.id}/800/600`;
                                                return (
                                                    <div className="card glass" key={repo.id}>
                                                        <img
                                                            className="thumb"
                                                            src={imgUrl}
                                                            alt="Project visual"
                                                            loading="lazy"
                                                            referrerPolicy="no-referrer"
                                                            onError={(e) => { e.currentTarget.src = fallback; }}
                                                        />
                                                        <button className='btn-ghost'>
                                                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                                        {repo.name}
                                                                </a>
                                                        </button>
                                                    </div>
                                                )
                                        })}
                                </div>
            )}
        </div>
    )
}

export default Portfolio
