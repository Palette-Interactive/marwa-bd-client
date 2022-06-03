import { useCallback, useEffect, useState } from "react";

import { httpGetMenuData } from "./request";

function useMenuData() {
  const [MenuData, saveMenuData] = useState([]);

  const getMenuData = useCallback(async () => {
    const fetchedMenuData = await httpGetMenuData();
    saveMenuData(fetchedMenuData.MenuData);
  }, []);

  useEffect(() => {
    getMenuData();
  }, [getMenuData]);

  return MenuData;
}

export default useMenuData;
