"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [inputCardNumber, setInputCardNumber] = useState("");
  const [inputCvc, setInputCvc] = useState("");
  const [inputName, setInputName] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const currentYear = new Date().getFullYear();
  const [isHidden, setIsHidden] = useState(false);
  const monthOptions = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    10,
    11,
    12,
  ];

  const handleInputCardNumber = (event) => {
    const { value } = event.target;
    let newValue = value.replace(/\D/g, ""); // Hanya mengizinkan angka

    setInputCardNumber(newValue);
  };

  const formatNumber = (value) => {
    const formattedValue = value.replace(/\s/g, "").match(/.{1,4}/g);
    return formattedValue ? formattedValue.join(" ") : "";
  };

  const handleInputCvc = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/[^0-9]/g, ""); // Hanya mengizinkan angka

    setInputCvc(newValue);
  };

  const handleInputName = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/[^a-zA-Z\s]/g, ""); // Hanya mengizinkan angka

    setInputName(newValue);
  };

  const yearOptions = Array.from(
    { length: 5 },
    (_, index) => currentYear + index
  );

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const submit = () => {
    if (inputName == false || inputName.charAt(0) == " " ) {
      alert("Namanya ga boleh kosong bro atau huruf depannya spasi");
    } else if (inputCardNumber.length < 16) {
      alert("Panjang card numbernya harus 16 bro");
    } else if (selectedMonth == "") {
      alert("Bulannya diisi dulu dong bro");
    } else if (selectedYear == "") {
      alert("Tahunnya diisi dulu dong bro");
    } else if (inputCvc.length < 3) {
      alert("Panjang cvcnya harus 3 bro");
    } else {
    setIsHidden(!isHidden);
    }
  };

  return (
    <div>
      <div className="bg-mobile bg-no-repeat bg-[length:100%] h-[200px] w-screen absolute -z-10 laptop:bg-desktop laptop:bg-[length:30%_100%] laptop:h-screen "></div>
      <div className="laptop:flex laptop:items-center laptop:justify-around h-screen">
        <div className="flex flex-col laptop:flex-col-reverse laptop:gap-10 laptop:w-1/2">
          <div className="flex justify-end text-white items-center text-sm bg-card-back bg-contain bg-no-repeat h-[125px] w-[228px] mr-4 mt-7 self-end laptop:m-0 laptop:h-[180px] laptop:w-[328px] ">
            <p className="mr-7 laptop:mr-9 laptop:text-[18px] -mt-1">
              {inputCvc == "" ? "000" : inputCvc}
            </p>
          </div>
          <div className="flex flex-col justify-between bg-card-front bg-contain box-border p-3 bg-no-repeat h-[125px] w-[228px] ml-4 mt-[-55px] laptop:m-0 laptop:h-[180px] laptop:w-[328px] laptop:ml-20">
            <div className="flex items-center">
              <div className="bg-white w-6 h-6 rounded-full laptop:w-10 laptop:h-10"></div>
              <div className="border-white border-[1px] w-3.5 h-3.5 rounded-full ml-3 laptop:w-5 laptop:h-5 laptop:ml-5"></div>
            </div>
            <div>
              <p className="text-white text-[20px] laptop:text-[30px] laptop:mb-[16px]">
                {inputCardNumber == ""
                  ? "0000 0000 0000 0000"
                  : formatNumber(inputCardNumber)}
              </p>
              <div className="flex text-[14px] text-white justify-between laptop:text-[17px]">
                <p className="max-w-[145px] laptop:text-[]">
                  {inputName ? inputName : "Jane Appleseed"}
                </p>
                <p>{`${selectedMonth ? selectedMonth : "00"}/${
                  selectedYear ? selectedYear : "00"
                }`}</p>
              </div>
            </div>
          </div>
        </div>

        {!isHidden ? (
          <div className="mt-[50px] flex justify-center laptop:w-1/2 laptop:m-0">
            <form
              action=""
              className="flex flex-col h-[250px] justify-between w-[90%] laptop:w-[70%]"
            >
              <div>
                <label htmlFor="name" className="block">
                  CARDHOLDER NAME
                </label>
                <input
                  id="name"
                  type="text"
                  className="border-black border-[1px] pl-3 box-border h-8 w-full border-opacity-50"
                  placeholder="e.g. Jane Appleseed"
                  value={inputName}
                  onChange={handleInputName}
                  maxLength={20}
                />
              </div>
              <div>
                <label htmlFor="number" className="block">
                  CARD NUMBER
                </label>
                <input
                  id="number"
                  type="text"
                  className="border-black border-[1px] pl-3 box-border h-8 w-full border-opacity-50"
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={inputCardNumber}
                  onChange={handleInputCardNumber}
                  maxLength={16}
                />
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <label htmlFor="month" className="block">
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex justify-between">
                    <select
                      className="border-[1px] border-opacity-50 h-8 w-[45%] border-black"
                      id="month"
                      value={selectedMonth}
                      onChange={handleMonthChange}
                    >
                      <option value="">Month</option>
                      {monthOptions.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      className="border-[1px] border-opacity-50 h-8 w-[45%] border-black"
                      id="year"
                      value={selectedYear}
                      onChange={handleYearChange}
                    >
                      <option value="">Year</option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year - 2000}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-[45%]">
                  <label htmlFor="cvc" className="block">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    className="border-black border-[1px] pl-3 box-border h-8 w-[100%] float-right border-opacity-50"
                    placeholder="e.g. 123"
                    value={inputCvc}
                    onChange={handleInputCvc}
                    maxLength={3}
                  />
                </div>
              </div>
              <button
                onClick={submit}
                className="w-full h-10 text-white bg-Very-dark-violet mt-4"
              >
                Confirm
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-[50px] flex justify-center laptop:w-1/2 laptop:m-0">
            <div className="flex flex-col h-[250px] items-center justify-between w-[90%] laptop:w-[70%]">
              <Image
                className="w-[80px]"
                src="/images/icon-complete.svg"
                alt="centang"
              />
              <h1 className="text-[30px] font-semibold">THANK YOU</h1>
              <p className="font-semibold text-gray-400">
                We've added your card details
              </p>
              <button
                onClick={submit}
                className="w-full h-10 text-white bg-Very-dark-violet mt-4"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
