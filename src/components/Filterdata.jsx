import React from 'react'

function Filterdata({ filterData }) {
    const currentStatus = (status) => {
        if (status === true) {
            return <h6 className="text-success">completed!</h6>

        } else {
            return <h6 className="text-danger">Pending...</h6>
        }
    }

    const trimStr = (str) => {
        if (str.length >= 16) {
            return str.slice(0, 16) + '...';
        } else {
            return str;
        }
    }

    return (
        <div className="row">
            {
                filterData.map((data, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card" style={{ width: '18rem', margin: '30px', cursor: 'pointer' }}>
                            <div className="card-body">
                                <h5 className="card-title">Title: {trimStr(data.title)}</h5>
                                <div style={{ display: 'flex' }}><b>Status</b>:&nbsp; {currentStatus(data.completed)}</div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Filterdata
