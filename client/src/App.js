import React from 'react';
import { Layout, Image, Typography, Row } from 'antd';
import { LocalImages } from './Utils/Images';
import Home from './components/Home';
import {styles} from "./styles";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <>
        <Layout>
            <Header style={styles.header}>
                <Row><Image src={LocalImages.sampleLogo}   /> &nbsp;
                <Title>JACO Articles</Title></Row>
            </Header>
            <Home />
            <Footer>2024 jacoArt</Footer>
        </Layout>
        </>
    )
}

export default App;