import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'





export default function Api() {
    const [data, setData] = useState<{userId: number, id: number, title: string, completed: boolean}>({userId: 0, id: 0, title: "Not set", completed: false})

    useEffect(() => {
        const getData = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

            const jsons =await res.json()
            setData(jsons)
        }

        getData()
    }, [])


  return (
    <SafeAreaView>
        <Text>Berikut adalah api dari jsonplaceholder</Text>
        <Text>User id: {data.userId}</Text>
        <Text>id: {data.id}</Text>
        <Text>title: {data.title}</Text>
        <Text>completed: {data.completed}</Text>
    </SafeAreaView>
  )
}
