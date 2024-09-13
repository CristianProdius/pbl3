import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">creaza un cont</h2>
      <p className="text-iridium md:text-sm">
        Spunene despre tine <br /> pentru a personaliza experienta ta.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="Sunt student"
        text="Blea vreu 10 la examen"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="Sunt afacere"
        text="Blea mam zaibit cu increderea"
      />
    </>
  );
};

export default TypeSelectionForm;
