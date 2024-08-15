"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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
    // Add more items as needed
];

const PaginatedItems = ({ initialItemsPerPage, itemsPerPage }) => {
    const [currentItemsCount, setCurrentItemsCount] = useState(initialItemsPerPage);

    const handleNextClick = () => {
        const newItemsCount = Math.min(currentItemsCount + itemsPerPage, items.length);
        setCurrentItemsCount(newItemsCount);
    };

    const currentItems = items.slice(0, currentItemsCount);

    return (
        <>
            <div className="w-[100%] flex flex-col items-center justify-center">
                <div className="w-[80%] grid grid-cols-3 items-center gap-5 justify-between">
                    {currentItems &&
                        currentItems.map((item, index) => (
                            <div key={index} className="flex flex-col gap-[20px]">
                                <div>
                                    <Image width={340} height={200} src={item.image} alt={item.hotelName} />
                                </div>
                                <div className="flex items-center gap-[30px] py-[30px]">
                                    <div>
                                        <h1 className="font-bold">{item.hotelName}</h1>
                                        <p className="text-sm">{item.address}</p>
                                    </div>
                                    <div>
                                        <button className="w-[8vw] text-sm border-2 rounded-full py-[5px]">
                                            {item.price}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {currentItemsCount < items.length && (
                <div className="w-[80%] flex justify-center mt-5">
                    <button onClick={handleNextClick} className="px-4 py-2 border rounded">
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default function ListName() {
    return (
        <div>
            <PaginatedItems initialItemsPerPage={4} itemsPerPage={4} />
        </div>
    );
}
