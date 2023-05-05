import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewData = () => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
  };

  return (
    // <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />

    <WebView
      source={{uri: 'https://mpobigwin.com/'}}
      onShouldStartLoadWithRequest={request => {
        let url = request.url;
        if (url.includes('https://mpobigwin.com/')) {
          Linking.openURL(url);

          return false;
        } else {
          return true;
        }
      }}
    />
  );
};

export default WebViewData;

const styles = StyleSheet.create({});


