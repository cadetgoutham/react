import React from 'react'

const isSafeUrl = (url) => /^https?:\/\//i.test(url || '');

export default function Card({ meals, error, loading }) {
    if (loading) {
        return (
            <div id='Menu' className='p-5 d-flex flex-wrap gap-4 justify-content-center bg-dark bg-opacity-10 Modal' role="status" aria-live="polite">
                <div className="loader" id='loader'></div>
                <span className="visually-hidden">Loading recipes…</span>
            </div>
        )
    }

    return (
        <div id='Menu' className='p-5 d-flex flex-wrap gap-4 justify-content-center bg-dark bg-opacity-10'>
            {meals.length ? meals.map((item) => (
                <div className="card" key={item.idMeal}>
                    <img src={item.strMealThumb} className="card-img-top" alt={item.strMeal} loading="lazy" />
                    <div className="card-body bg-dark bg-opacity-10">
                        <h2 className="card-title h5">{item.strMeal}</h2>
                        <div className="card-text">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Cuisine</td>
                                        <td>{" "}-{" "}</td>
                                        <td>{item.strArea}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{" "}-{" "}</td>
                                        <td>{item.strCategory}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {(isSafeUrl(item.strSource) || isSafeUrl(item.strYoutube)) && (
                            <a
                                className="btn btn-dark"
                                href={isSafeUrl(item.strSource) ? item.strSource : item.strYoutube}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Recipe
                            </a>
                        )}
                    </div>
                </div>
            )) : <p role="alert">{error}</p>}
        </div>
    )
}
