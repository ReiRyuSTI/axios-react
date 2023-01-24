import { useCallback } from "react";
import { testType } from "types/apiTypes";
import { axiosClient } from "./AxiosConfigHandler";

export const useTestApi = () => {
  const getTestDataBase = useCallback(async () => {
    const result = axiosClient.get("/test");
    return result;
  }, [axiosClient]);

  const getTestData = useCallback(
    async (id: number) => {
      const result = axiosClient.get(`/test/${id}`);
      return result;
    },
    [axiosClient]
  );
  const postTestData = useCallback(
    async (formData: testType) => {
      const result = axiosClient.post("/test", formData);
      return result;
    },
    [axiosClient]
  );
  const editTestData = useCallback(
    async (formData: testType) => {
      const result = axiosClient.put("/test", formData);
      return result;
    },
    [axiosClient]
  );
  // https://note.com/shift_tech/n/nad1425e242df deleteメソッドのみ呼び方が変わる
  const deleteTestData = useCallback(
    async (id: number) => {
      const result = axiosClient.delete("/test", { data: { id: id } });
      return result;
    },
    [axiosClient]
  );

  return {
    getTestDataBase,
    getTestData,
    postTestData,
    editTestData,
    deleteTestData,
  };
};
