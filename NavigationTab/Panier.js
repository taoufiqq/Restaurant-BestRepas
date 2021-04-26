import { Text, View } from 'native-base'
import React from 'react'

export default function Panier() {
    const {data}= route.params
    return (
        <View>
            <Text>{data.title}</Text>
        </View>
    )
}


