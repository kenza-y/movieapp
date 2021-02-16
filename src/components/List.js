import React, { useState,useEffect } from 'react';
import {getMovies} from './API';

const List = () => {
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);
    

  function fetchMoreListItems() {
   
  }

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
    setIsFetching(true);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;