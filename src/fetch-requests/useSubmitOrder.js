// import { useCallback, useEffect, useState } from "react";

// import {
//     httpSubmitOrder
// } from './request';

// function useSubmitOrder(onSuccessSound, onAbortSound, onFailureSound) {
//   const [launches, saveLaunches] = useState([]);
  
//   const getLaunches = useCallback(async () => {
//     const fetchedLaunches = await httpSubmitOrder();
//     saveLaunches(fetchedLaunches);
//   }, []);

//   useEffect(() => {
//     getLaunches();
//   }, [getLaunches]);

//   const submitLaunch = useCallback(async (e) => {
//     e.preventDefault();
//     // setPendingLaunch(true);
//     const data = new FormData(e.target);
//     const launchDate = new Date(data.get("launch-day"));
//     const mission = data.get("mission-name");
//     const rocket = data.get("rocket-name");
//     const target = data.get("planets-selector");
//     const response = await httpSubmitOrder({
//       launchDate,
//       mission,
//       rocket,
//       target,
//     });
//   }, [getLaunches]);

//   return {
   
//   };
// }

// export default useSubmitOrder;