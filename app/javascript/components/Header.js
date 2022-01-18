import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { paths } from "../assets/paths";
import { Layout, Menu } from "antd";

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