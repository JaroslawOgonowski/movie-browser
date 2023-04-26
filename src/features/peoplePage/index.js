import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import { imagesAPI600x900 } from "../../core/API";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople())
  }, [])

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") {
    console.log(fetchResult.results)
    return (
      <>
        <div><ul>
          {fetchResult.results.map(person => (
            <li key={person.id}>{person.name}<img src={`${imagesAPI600x900}${person.profile_path}`}alt=""/>
            </li>
          ))}</ul>
        </div>
          <Pagination></Pagination>
      </>      
    );

  }
};