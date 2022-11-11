import React, {  useEffect } from "react";
import {Image, ScrollView, StyleSheet,Text,View } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";


const styles = StyleSheet.create({
    header: {
      height: 300,
      backgroundColor: '#6C63FF',
      paddingVertical: 30,
      justifyContent: 'flex-end',
      alignItems: 'center',

      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      overflow: "hidden",
      zIndex:5
    },

    avatar: {
      height: 140,
      width: 140,
      borderRadius: 70,
      backgroundColor: 'rgba(0,0,0,0.2)',
    },

    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 16,
      color: '#FFF',
    },

    listItem: {
      padding: 20,
      fontSize: 18,
    },
  });

export default function FourthScreen(){
    const scrollY =  useSharedValue(0)

    const scrollhandler = useAnimatedScrollHandler(ev=>{
        scrollY.value = ev.contentOffset.y
    })

    const headerStyle=  useAnimatedStyle(()=>{
        return{
            height: interpolate(
                scrollY.value,
                [0,180],
                [300,180],
                Extrapolate.CLAMP
            )
        }
    })

    const avatarStyle=  useAnimatedStyle(()=>{
        return{
            opacity: interpolate(
                scrollY.value,
                [100,150],
                [1,0],
                Extrapolate.CLAMP
            )
        }
    })


    return(
        <View>

            <Animated.ScrollView
            onScroll={scrollhandler}
            scrollEventThrottle={16}
            contentContainerStyle={{paddingTop:300}}>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
                <Text style={styles.listItem}>item da lista</Text>
            </Animated.ScrollView>

            <Animated.View style={[styles.header,headerStyle]}>
                <Animated.Image style={[styles.avatar,avatarStyle]}
                    source={{uri:'https://pbs.twimg.com/media/FP_XS-NagAM_VPx?format=jpg&name=4096x4096'}}
                />
                <Text style={styles.name}>Sona</Text>
            </Animated.View>
        </View>

    )
}