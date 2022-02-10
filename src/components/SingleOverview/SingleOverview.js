import React from "react";
import './SingleOverview.scss';

function SingleOverview(props) {
    return (
        <section className='section'>
            <div className='overview'>
                <h1 className='overview_title'>{props.overview} Overview</h1>
                <div className='overview_container'>
                    <div className='overview_container_details'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Example 1</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <td>Example 2</td>
                                <td>$17</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='overview_container_chart'>
                        <p>Chart generated by Chart.JS will be there</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleOverview;