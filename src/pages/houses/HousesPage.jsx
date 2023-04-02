import React from 'react'
import { useSelector } from 'react-redux';
import { Dna } from  'react-loader-spinner';
import HousesList from '../../components/houses/HousesList';


export default function HousesPage() {
 
  const houses = useSelector(({ houses }) => houses.houses)
  const isLoading = useSelector(({ houses }) => houses.loading);
  const isError = useSelector(({ houses }) => houses.error);
  

  return (
      <div>
          {houses && <HousesList />}
          {isLoading &&
          <div>
              <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
          />
          </div>}
      {isError && <p>Sorry, something is wrong. Please, try again later.</p>}
      </div>
  )
}
