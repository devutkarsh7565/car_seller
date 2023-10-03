import { Menu } from "@headlessui/react";
import React from "react";

const SearchMenu = () => {
  return (
    <>
      <Menu>
        <Menu.Items
          className={`w-[300px] h-[150px] bg-[#F9FAFB] z-[100] fixed top-20 right-4 sm:right-10 p-6 flex flex-col gap-3 rounded-2xl`}
        >
          <Menu.Item>
            {({ active }) => <div className="flex gap-4">hello</div>}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default SearchMenu;
