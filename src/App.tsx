import {  Input, Spinner } from "@nextui-org/react";
import { useState } from "react";

function App() {
  const [Data, SetData] = useState<any>({});

  const [load, SetLoad] = useState<any>(false);

  const fetchData = async (pincode: any) => {
    try {
      SetLoad(true);
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      SetData(data[0]);
      console.log(Data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      SetLoad(false);
    }
  };

  return (
    <>
      <div>
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto ">
          <h1 className="my-12 text-2xl font-semibold">
            Fetch Data with Pincode in India:
          </h1>

          <div>
            <Input
              type="number"
              variant="faded"
              label="Pincode"
              size="md"
              className=""
              onChange={(e: any) => fetchData(e.target.value)}
            />
          </div>

          {load ? (
            <div className="flex justify-center items-center">
              <h1 className="my-24">
                <Spinner color="success" />
              </h1>
            </div>
          ) : (
            <div>
              {Data?.Message && (
                <h1 className="text-green-500 my-6 font-semibold text-lg bg-blue-50 w-full md:w-fit md:px-6 rounded-lg py-2 text-center">
                  {Data?.Message}
                </h1>
              )}

              <div>
                {Data?.PostOffice && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {Data?.PostOffice.map((val: any, index: number) => (
                      <div key={index} className="bg-slate-200 p-2 rounded-lg space-y-3  pb-6 md:ps-4">
                        <h1 className="text-blue-600 text-xl font-bold my-2">
                          Details :
                        </h1>

                        <h1>
                          <span className="font-bold">PostOffice Name :</span>
                          &nbsp;{val?.Name}
                        </h1>
                        <h1>
                          <span className="font-bold">BranchType :</span>
                          &nbsp;{val?.BranchType}
                        </h1>
                        <h1>
                          <span className="font-bold">DeliveryStatus :</span>
                          &nbsp;{val?.DeliveryStatus}
                        </h1>
                        <h1>
                          <span className="font-bold">Circle :</span>
                          &nbsp;{val?.Circle}
                        </h1>
                        <h1>
                          <span className="font-bold">District :</span>
                          &nbsp;{val?.District}
                        </h1>
                        <h1>
                          <span className="font-bold">Division :</span>
                          &nbsp;{val?.Division}
                        </h1>
                        <h1>
                          <span className="font-bold">Region :</span>
                          &nbsp;{val?.Region}
                        </h1>
                        <h1>
                          <span className="font-bold">Block :</span>
                          &nbsp;{val?.Block}
                        </h1>
                        <h1>
                          <span className="font-bold">State :</span>
                          &nbsp;{val?.State}
                        </h1>
                        <h1>
                          <span className="font-bold">Country :</span>
                          &nbsp;{val?.Country}
                        </h1>
                        <h1>
                          <span className="font-bold">Pincode :</span>
                          &nbsp;{val?.Pincode}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
