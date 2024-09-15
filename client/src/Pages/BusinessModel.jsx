import React from 'react'

function BusinessModel() {
    return (
        <div className='bg-white h-screen w-full flex justify-center items-center'>
            <div className='flex gap-10 p-2 rounded-lg'>
                <div className="card p-4 rounded-2xl">
                    <p className="title">Standard</p>
                    <div className="pricecontainer rounded-lg">
                        <p className="price">$2.99</p>
                        <p className="pricedescriptor">/month</p>
                    </div>
                    <p className="includes">This Plan Includes:</p>
                    <ul className="benefitlist">
                        <li>Awesome Benefits</li>
                        <li>10% Discount</li>
                    </ul>
                    <div className="btncontainer">
                        <button>Select This Plan</button>
                    </div>
                </div>
                <div className="card p-4 rounded-2xl">
                    <p className="title">Standard</p>
                    <div className="pricecontainer rounded-lg">
                        <p className="price">$2.99</p>
                        <p className="pricedescriptor">/month</p>
                    </div>
                    <p className="includes">This Plan Includes:</p>
                    <ul className="benefitlist">
                        <li>Awesome Benefits</li>
                        <li>10% Discount</li>
                    </ul>
                    <div className="btncontainer">
                        <button>Select This Plan</button>
                    </div>
                </div>
                <div className="card p-4 rounded-2xl">
                    <p className="title">Standard</p>
                    <div className="pricecontainer rounded-lg">
                        <p className="price">$2.99</p>
                        <p className="pricedescriptor">/month</p>
                    </div>
                    <p className="includes">This Plan Includes:</p>
                    <ul className="benefitlist">
                        <li>Awesome Benefits</li>
                        <li>10% Discount</li>
                    </ul>
                    <div className="btncontainer">
                        <button>Select This Plan</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BusinessModel