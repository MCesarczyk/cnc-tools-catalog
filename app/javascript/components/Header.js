import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const paths = [
    {
        key: 1,
        path: "/",
        name: "Home"
    },
    {
        key: 2,
        path: "/stock",
        name: "Stock"
    },
    {
        key: 3,
        path: "/contact",
        name: "Contact"
    }
];

const { Header } = Layout;

export default () => {
    const location = useLocation();

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[
                    paths[paths.findIndex(({ path }) => path === location.pathname)].key.toString()
                ]}
            >
                {paths.map(item => (
                    <Menu.Item key={item.key}>
                        <NavLink to={item.path} >
                            {item.name}
                        </NavLink>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    )
};