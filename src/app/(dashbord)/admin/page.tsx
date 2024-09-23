import Announcements from "@/components/announcements";
import EventCalendar from "@/components/calendar";
import AttendanceChart from "@/components/charts/attendance-chart";
import CountChart from "@/components/charts/count-chart";
import FinanceChart from "@/components/charts/finance-chart";
import UserCard from "@/components/user-card";
import React from "react";

type Props = {};

const AdminPage = (props: Props) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*LEft */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/*Charts Middle */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/*Chart Bottom */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/*Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
