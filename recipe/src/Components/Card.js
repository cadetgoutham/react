import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ data, error, loading }) {

    return (
        <>
            {
                loading ? <div id='Menu' className='p-5 d-flex flex-wrap gap-4 justify-content-center bg-dark bg-opacity-10 Modal'>
                    <div className="loader" id='loader'></div>
                </div> :
                    <div id='Menu' className='p-5 d-flex flex-wrap gap-4 justify-content-center bg-dark bg-opacity-10'>
                        {
                            data.meals ? data.meals.map((item) => {
                                return (
                                    <div className="card " key={item.idMeal}>
                                        <img src={item.strMealThumb} className="card-img-top" alt="..." />
                                        <div className="card-body bg-dark bg-opacity-10">
                                            <h5 className="card-title">{item.strMeal}</h5>
                                            <div className="card-text">
                                                <table >
                                                    <tbody>
                                                        <tr>
                                                            <td>Cuisian</td>
                                                            <td>{" "} -{" "} </td>
                                                            <td>{item.strArea}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Category</td>
                                                            <td>{" "} -{" "} </td>
                                                            <td>{item.strCategory}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <Link to={item.strSource} target='_blank'><button className="btn btn-dark">Recipe</button></Link>
                                        </div>
                                    </div>
                                )
                            }) :
                                <>{error}</>
                        }

                    </div>
            }
        </>
    )
}
