import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useLayoutContext from "../contexts/LayoutContext";
import { MdMenu } from "react-icons/md";

type MenuItem = {
  label: string;
  to: string;
};

const Navbar = () => {
  const { solid } = useLayoutContext();

  const menu: MenuItem[] = [
    {
      label: "Beranda",
      to: "/",
    },
    {
      label: "Purna",
      to: "/member",
    },
  ];
  return (
    <nav
      className={classNames(
        "w-screen flex items-center md:px-16 fixed z-50 duration-300",
        {
          "bg-transparent h-32": !solid,
          "bg-blue-500 h-20 shadow-lg": solid,
        }
      )}
    >
      <h1 className="text-lg text-white font-black uppercase px-4 md:px-0 tracking-widest">
        PASSMANDA
      </h1>
      <div
        className={classNames(
          "ms-auto hidden md:flex items-center duration-200 h-full"
        )}
      >
        {menu.map((m, i) => {
          return (
            <NavLink
              key={i}
              to={m.to}
              className={({ isActive }) => {
                return classNames(
                  "text-white uppercase duration-200 flex items-center px-2",
                  {
                    "hover:px-4 hover:font-black focus:font-black hover:bg-blue-600 h-full focus:px-4 outline-none focus:bg-blue-600":
                      solid,
                    "hover:font-black outline-none focus:font-black": !solid,
                    "font-black": isActive,
                  }
                );
              }}
            >
              {m.label}
            </NavLink>
          );
        })}
      </div>
      <Menu as="div" className="relative ms-auto md:hidden h-full">
        <Menu.Button
          className={classNames(
            "uppercase text-white px-6 hover:font-black h-full duration-200 text-2xl",
            {
              "hover:bg-blue-600": solid,
            }
          )}
        >
          <MdMenu />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="duration-200"
          enterFrom="-translate-y-24 opacity-0"
          enterTo={classNames("translate-y-0 opacity-100", {
            "translate-y-0": solid,
            "-translate-y-6": !solid,
          })}
          leave="duration-200"
          leaveFrom={classNames("translate-y-0 opacity-100", {
            "translate-y-0": solid,
            "-translate-y-6": !solid,
          })}
          leaveTo="-translate-y-24 opacity-0"
        >
          <Menu.Items
            className={classNames(
              "bg-white absolute right-0 shadow py-2 w-64 flex flex-col",
              { "-translate-y-6": !solid }
            )}
          >
            {menu.map((m, i) => {
              return (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <NavLink
                      className={classNames("duration-200 px-3 py-2", {
                        "bg-blue-500 text-white": active,
                      })}
                      to={m.to}
                    >
                      {m.label}
                    </NavLink>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
