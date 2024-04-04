import { Layout } from "antd";
import React from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import {styles} from "./styles";

const {Sider, Content} = Layout;

const Home = () => {
    return(
        <>
            <Layout>
                <Sider style={styles.sider} width={400}>
                    <StoryForm />
                </Sider>
                <Content>
                    <StoryList />
                </Content>
            </Layout>
        </>
    )
}

export default Home;