import React from 'react'
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="SignInScreen"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="CreateUsernameScreen"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SelectBuildScreen"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}