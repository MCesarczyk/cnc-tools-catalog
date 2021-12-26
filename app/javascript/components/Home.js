import React from "react";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const Home = () => (
    <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content" style={{ margin: "100px auto" }}>
                <h1>CNC Tools Catalog</h1>
            </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>MCesarczyk ©2021.</Footer>
    </Layout>
);

export default Home;