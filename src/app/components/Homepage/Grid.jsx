"use client";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';

const items = () =>{

const [currentPage, setCurrentPage]= useState(0)
const itemsprepage = 3;
const items = [


    {
        image: '/Rectangle 38.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 39.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 40.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 79.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 38.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 39.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 40.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 79.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 38.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 39.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 40.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
    {
        image: '/Rectangle 79.png',
        hotelName: "Landmark Living",
        address: "Banana Island, Ikoyi, Lagos",
        price: "NGN 450k/Y"
    },
   
];
const startIndex = currentPage * itemsprepage;
const endIndex = startIndex + itemsprepage;
const currentItems =items.slice(startIndex, endIndex);

const handleitemsChange = ({ selected }) => {
    setCurrentPage(selected);

}

    return (
        <div className='flex flex-col items-center justify-center pb-[20px] gap-4'>
            {
                 currentItems.map((i, index)=> (
                <div>
                    <img src={i.image} alt="" />
                    <div className="flex items-center gap-[30px] py-[30px]">
                        <div>
                            <p className='font-bold'>{i.hotelName}</p>
                            <p>{i.address}</p>
                        </div>
                        <div>
                            <button className="md:w-[8vw] w-[30vw] text-sm border-2 rounded-full py-[5px]">
                                {i.price}
                            </button>
                        </div>
                    </div>
                </div>

                 ))
            }

                <ReactPaginate
                          previousLabel={'Previous'}
                          nextLabel={'Next'}
                          breakLabel={'...'}
                          pageCount={Math.ceil(items.length / itemsprepage)}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={handleitemsChange}
                          containerClassName={'flex justify-center space-x-2 mt-5'}
                          previousLinkClassName={'px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'}
                          nextLinkClassName={'px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'}
                          breakLinkClassName={'px-3 py-1'}
                          pageLinkClassName={'px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'}
                          activeLinkClassName={'bg-[#51B73B] text-white'}
                

                />
        </div>
    )
    }

    export default items
            // {/* <div className="w-[100%] flex flex-col items-center justify-center">
            //     <div className="w-[80%] grid grid-cols-3 items-center gap-5 justify-between">
            //         {currentItems &&
            //             currentItems.map((item, index) => (
            //                 <div key={index} className="flex flex-col gap-[20px]">
            //                     <div>
            //                         <Image width={340} height={200} src={item.image} alt={item.hotelName} />
            //                     </div>
            //                     <div className="flex items-center gap-[30px] py-[30px]">
            //                         <div>
            //                             <h1 className="font-bold">{item.hotelName}</h1>
            //                             <p className="text-sm">{item.address}</p>
            //                         </div>
            //                         <div>
            //                             <button className="w-[8vw] text-sm border-2 rounded-full py-[5px]">
            //                                 {item.price}
            //                             </button>
            //                         </div>
            //                     </div>
            //                 </div>
            //             ))} */}

  
//   
