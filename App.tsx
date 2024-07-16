import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import Block from './components/Block';
import Banner from './components/Banner';
import Button from './components/Button';
import TextInput from './components/TextInput';
import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './components/Theme';
import { SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <Banner src="https://via.placeholder.com/800x200" />
          <Block title="Thông tin cá nhân">
            <TextInput placeholder="Họ và tên" />
            <TextInput placeholder="Email" />
          </Block>
          <Block title="Thông tin khóa học">
            <TextInput placeholder="Tên khóa học" />
            <TextInput placeholder="Ngày bắt đầu" />
          </Block>
          <Block title="Thông tin liên hệ">
            <TextInput placeholder="Số điện thoại" />
            <TextInput placeholder="Địa chỉ" />
          </Block>
          <Button onPress={() => alert('Đăng ký thành công!')}>Đăng ký</Button>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
