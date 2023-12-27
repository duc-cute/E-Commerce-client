/** @format */

import React, { useEffect, useState } from "react";
import { Button, InputField, Pagination, Table, Tag } from "../../components";
import icons from "../../ultils/icons";
import { apiGetUsers } from "../../apis";
import useDebounce from "../../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
const { TiPlus, FiTrash2, LuPencilLine, AiOutlineSearch } = icons;

let columns = [
  {
    title: "No",
    key: "no",
    sort: true,
    render: (no) => <span className="text-[#1677ff] cursor-pointer">{no}</span>,
  },
  { title: "FullName", key: "fullname" },
  { title: "Email", key: "email" },
  { title: "Role", key: "role" },
  { title: "Phone", key: "phone" },
  {
    title: "Status",
    key: "status",
    render: (status) => (
      <Tag
        status={`${status ? "warning" : "success"}`}
        className=" cursor-pointer"
      >
        {status ? "block" : "active"}
      </Tag>
    ),
  },
  { title: "CreatedAt", key: "createdAt", sort: true },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div className="flex items-center gap-3 cursor-pointer">
        <FiTrash2 color="red" />
        <LuPencilLine color="#1677ff" />
      </div>
    ),
  },
];

const ManageUser = () => {
  const [listUser, setListUser] = useState([]);
  const [params] = useSearchParams();
  const [count, setCount] = useState(null);
  const [querySearch, setQuerySearch] = useState({
    search: "",
  });
  const fetchUser = async (params) => {
    const response = await apiGetUsers(params);
    if (response.success) {
      const data = response?.users?.map((user, index) => ({
        no: index,
        fullname: user.firstname + " " + user.lastname,
        email: user.email,
        role: user.role,
        phone: user.mobile,
        status: user.isBlocked,
        createdAt: user.createdAt,
      }));
      setListUser(data);
      setCount(response.counts);
    }
  };
  const queriesDebounce = useDebounce(querySearch.search, 500);
  useEffect(() => {
    const queries = Object.fromEntries(params);

    if (queriesDebounce) queries.search = queriesDebounce;
    fetchUser({ ...queries, limit: import.meta.env.VITE_PROD_LIMIT });
  }, [queriesDebounce, params]);

  const groupButton = [
    {
      id: 1,
      button: (
        <InputField
          value={querySearch.queries}
          setValue={setQuerySearch}
          nameKey="search"
          icon={<AiOutlineSearch />}
        />
      ),
    },
    {
      id: 2,
      button: (
        <Button
          style={
            "py-[10px] text-white rounded-md bg-[#1677ff] flex gap-1 items-center font-lato text-[14px]"
          }
        >
          <TiPlus />
          Thêm mới
        </Button>
      ),
    },
  ];

  return (
    <div className=" h-[1000px]">
      {/* <div className=" mx-4 flex flex-col px-4 bg-[#ebebeb] rounded-xl pb-4">
        <div className="flex gap-3 items-center justify-between pt-5  mb-6">
          <InputField name={"Họ Tên"} />
          <InputField name={"Email"} />
          <InputField name={"Mã Sinh Viên"} />
          <InputField name={"Lớp"} />
        </div>
        <div className="flex items-center gap-3 self-end">
          <Button>Search</Button>
          <Button style={"bg-white text-black"}>Clear</Button>
        </div>
      </div> */}
      <div className="mx-4 mt-4">
        <Table
          title="Danh sách user"
          columns={columns}
          data={listUser}
          groupButton={groupButton}
          count={count}
        />
      </div>
    </div>
  );
};

export default ManageUser;
