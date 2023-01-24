import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

export const axiosClient = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:4242/",
});

type Props = {
  children: React.ReactElement;
};

export const AxiosErrorHandler = ({ children }: Props) => {
  const [apiErrorFlag, setApiErrorFlag] = useState<boolean>(false);
  const [serverErrorFlag, setServerErrorFlag] = useState<boolean>(false);

  useEffect(() => {
    const responseIntercepter = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (!error.response) {
          console.error("error", error);
          switch (error.code) {
            case "ERR_NETWORK":
              setServerErrorFlag(true);
              break;
            default:
              break;
          }
        }

        switch (error.response?.status) {
          case 400:
          case 403:
          case 404:
          case 500:
            setApiErrorFlag(true);
            break;
          default:
            console.error("response error", error);
            break;
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosClient.interceptors.response.eject(responseIntercepter);
    };
  }, []);

  const ErrorPage = () => {
    return (
      <>
        <section className="flex flex-col items-center justify-around w-full h-36 bg-red-500">
          <div>Error</div>
          <button onClick={() => setApiErrorFlag(false)}>
            前のページに戻る
          </button>
          <button onClick={() => location.reload()}>リダイレクト</button>
        </section>
      </>
    );
  };
  const ServerErrorPage = () => {
    return (
      <>
        <section className="flex flex-col items-center justify-around w-full h-36 bg-red-500 text-white">
          <div>サーバーが動いていないか、返答がありません。</div>
        </section>
      </>
    );
  };

  if (apiErrorFlag) return <ErrorPage />;
  if (serverErrorFlag) return <ServerErrorPage />;
  return <>{children}</>;
};
