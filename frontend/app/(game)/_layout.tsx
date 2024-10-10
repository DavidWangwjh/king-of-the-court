import React from 'react'
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="GameInProgressScreen"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="GameResultScreen"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}