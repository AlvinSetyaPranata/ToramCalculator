import { StyledComponent } from "nativewind";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Atoms/InputControlled";
import InputField from "../components/Molecules/InputField";
import Button from "../components/Atoms/Button";
import { useRef } from "react";

export default function Home() {
    const onClick = () => {
        Alert.alert("Information", input1?.current?.state.value)

    }

    const input1 = useRef<TextInput|null>(null)
    const input2 = useRef<TextInput|null>(null)


    return (
        <SafeAreaView>
            <StyledComponent className="px-4 box-border bg-red-500 h-full border-none justify-center" component={View}>
                <InputField className="my-4" label="Your Level">
                    <Input  ref={input1}/>
                </InputField>
                <InputField className="my-4" label="SP Gained">
                    <Input readonly={true} ref={input2}/>
                </InputField>
                <Button onClick={onClick} text="Find" />
            </StyledComponent>
        </SafeAreaView>
    )
}