import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Item from '../components/Item';
function Items({ currentItems }) {
    return (
        <>
            {currentItems && currentItems.map(({ title, description, pubDate, image }) => <Item key={title} title={title} description={description} pubDate={pubDate} image={image} /> )}
        </>
    )
}

export default function Currencies({ itemsPerPage }) {
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
    }, [itemOffset, itemsPerPage, items]);
    useEffect(() => {
        fetch('https://tradingideas.deta.dev/currencies')
            .then(res => res.json())
            .then(data => { setItems(data) })
    }, [])
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div className="w3-main w3-content w3-padding" style={{ maxWidth: '1200px', marginTop: '100px' }}>
            {
                items
                &&
                <>
                    <div className='w3-opacity w3-center'>
                        <h1><b>CURRENCIES</b></h1>
                    </div>
                    <Items currentItems={currentItems} />
                    <div className='w3-center'>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="»"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="«"
                            renderOnZeroPageCount={null}
                            className="w3-bar w3-padding-16"
                            pageClassName="w3-bar-item w3-button w3-hover-black"
                            previousClassName='w3-bar-item w3-button w3-hover-black'
                            nextClassName='w3-bar-item w3-button w3-hover-black'
                            activeClassName='w3-bar-item w3-button w3-green'
                        />
                    </div>
                </>
            }
            {
                !items
                &&
                <div>Loading ...</div>
            }
        </div>
    );
}
