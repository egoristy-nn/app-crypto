import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';
import { Spin } from 'antd';

export default function AppLayout() {
    const {loading} = useContext(CryptoContext);
    if (loading) {
        return <Spin fullscreen size='large'/>
    }
    return (
        <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    )
}