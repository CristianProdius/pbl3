import OTPInput from "@/components/otp";
import React from "react";

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  onOTP: string;
};

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Introdu OTP</h2>
      <p className="text-iridium md:text-sm">
        Introdu OTP ul ce lai primit pe email
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOTP} />
      </div>
    </>
  );
};

export default OTPForm;
