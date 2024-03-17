import Navabr from 'ComponentsList/Navbar/Navabr'
import React, { useState, useEffect } from 'react';
import XYZ from './xzy.jpeg'

const BasePage = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/fwlzn9zf0nzvk');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

    return (
        <>
            <Navabr />

            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Jobs which you're looking for</h1>

            <div className="container">

                <div className="row">
                {data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                    <div className="my-3">
                        <div className="card">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                position: 'absolute',
                                right: '0'
                            }
                            }>
                                <span className="badge rounded-pill bg-danger">{capitalizeFirstLetter(item.city)}</span>
                            </div>
                            <img src={XYZ} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{capitalizeFirstLetter(item.title)} </h5>
                                <p className="card-text"><small className="text-muted">Working Hour: {item['working hour']}</small></p>
                                <p className="card-text"><small className="text-muted"><b>Phone No.: {item['phone no.']}</b></small></p>

                            </div>
                        </div>
                    </div>

                </div>
 ))}

                    



                </div>
            </div>


        </>
    )
}

export default BasePage
