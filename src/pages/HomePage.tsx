import { AxiosResponse } from "axios";
import { useTestApi } from "hooks/testApi";
import React, { Suspense, useState } from "react";
import { testType } from "types/apiTypes";

export const HomePage = () => {
  const { getTestDataBase, editTestData } = useTestApi();
  const [testDataBase, setTestDataBase] = useState<testType[]>([]);

  const [index, setIndex] = useState<number>(0);

  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [isDataLoading2, setIsDataLoading2] = useState<boolean>(false);

  const DataViewComponent = () => {
    if (index > 5) return <>Error End</>;

    console.log("is Data Loading");
    if (!isDataLoading) {
      throw getTestDataBase()
        .then((value: AxiosResponse<{ testDataBase: testType[] }>) => {
          setTestDataBase(value.data.testDataBase);
          setIsDataLoading(true);
        })
        .catch(async () => {
          setIndex(index + 1);
          await new Promise((resoleve) => setTimeout(resoleve, 3000));
        });
    }
    console.log("is Data Loading2");

    if (!isDataLoading2) {
      throw editTestData({ id: 4, text: "ddd", done: true })
        .then((value: AxiosResponse<{ testData: testType }>) => {
          console.log(value);
          setIsDataLoading2(true);
        })
        .catch(async () => {
          setIndex(index + 1);
          await new Promise((resoleve) => setTimeout(resoleve, 10000));
        });
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
