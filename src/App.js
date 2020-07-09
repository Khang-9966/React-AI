// this example use icon from material-ui/icons, you can use your own!
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import ElevationScroll from './headerbar';
import ListDividers from './listdriver';
import Dashboard from './dashboard';
import {
 Root,
 Header,
 Nav,
 Content,
 Footer,
 presets,
} from 'mui-layout';

const baseTheme = createMuiTheme(); // or use your own theme;
const config = presets.createStandardLayout();

const App = () => (
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header
       renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
     >
       <ElevationScroll/>
     </Header>
     <Nav
       renderIcon={collapsed =>
         collapsed ? <ChevronRight /> : <ChevronLeft />
       }
     >
       < ListDividers/ >
     </Nav>
     <Content>
       <h1>   Chào mừng Nguyễn Văn Tâm </h1>
      <Dashboard/>
     </Content>
     <Footer>
      © Hatto - AI 2020 - Make in Vietnam. -  About - Terms & Conditions -  Contact us
     </Footer>
   </Root>
  </ThemeProvider>
)

export default App;