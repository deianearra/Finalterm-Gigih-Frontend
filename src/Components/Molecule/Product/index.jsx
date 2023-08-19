import React from "react";
import { Link } from "react-router-dom";

function Product({ ListData}) {
    return (
        <>
            <div className="w-[250px] h-[700px] overflow-auto">
                {ListData.map((data) => (
                    <div className="p-2 rounded-xl bg-slate-600 h-[250] m-2" key={data._id}>
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" className="w-full h-auto rounded-xl mb-2" alt="Product Thumbnail" />
                        <h2 className="text-white text-lg font-semibold">{data.productTitle}</h2>
                        <p className="text-white mb-2">${data.productPrice}</p>
                        <Link to={data.productLink} className="text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </div>
                ))};

            </div>
        </>
    );
}

export default Product;



