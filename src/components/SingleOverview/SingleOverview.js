import React from "react";
import './SingleOverview.scss';
import SingleChart from "./SingleChart";

function SingleOverview(props) {
    return (
        <section className='section'>
            <div className='singleOverview'>
                <h1 className='singleOverview_title'>{props.overview} Overview</h1>
                <div className='singleOverview_container'>
                    <div className='singleOverview_container_details'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                props.list.map((list, index) => (
                                    <tr key={'index-' + index} data-income-index={index}>
                                        <td>{list.description}</td>
                                        <td>${list.amount}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {props.list.length == 1 ? <div></div> : (
                        <div className='singleOverview_container_chart'>
                            <SingleChart  overview={props.overview} list={props.list} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SingleOverview;