import { AxiosResponse } from "axios";
import { useTestApi } from "hooks/testApi";
import React, { Suspense, useState } from "react";
import { testType } from "types/apiTypes";

export const HomePage = () => {
  const { getTestDataBase } = useTestApi();
  const [testDataBase, setTestDataBase] = useState<testType[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

  const DataViewComponent = () => {
    if (!isDataLoading) {
      throw getTestDataBase().then(
        (value: AxiosResponse<{ testDataBase: testType[] }>) => {
          setTestDataBase(value.data.testDataBase);
          setIsDataLoading(true);
        }
      );
    }
    return (
      <>
        {testDataBase.map((value) => (
          <div key={value.text}>
            {value.text}:{value.done ? "true" : "false"}
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div>Home</div>
      <Suspense fallback={<p>データ読み込み中</p>}>
        <DataViewComponent key={"DataBase"} />
      </Suspense>
    </>
  );
};
