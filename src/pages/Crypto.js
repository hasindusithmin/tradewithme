import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div key={item}>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}

export default function Crypto({ itemsPerPage }) {
    const [items, setItems] = useState(false);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        if (items) {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage,items]);
    useEffect(()=>{
        setTimeout(()=>{
            setItems([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
        },1500)
    },[])
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            {
                items
                &&
                <>
                    <Items currentItems={currentItems} />
                    <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    />
                </>
            }
            {
                !items
                &&
                <div>Loading ...</div>
            }
        </>
    );
}
