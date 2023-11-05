import { StyledComponent } from "nativewind";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputControlled, Button } from "../components/Atoms";
import InputField from "../components/Molecules/InputField";
import { useState } from "react";


export default function Home() {
    const [childValue, setChildValue] = useState<string>("")
    const [value, setValue] = useState<string>("")

    const CAP_LEVEL = 270


    const calculate = (level: number): number => {
        // find level that can be devide by 5 because it's 2 * level + 5        
        if (level % 5 == 0) {
            level = 2 * level + 5
        } else {
            level *= 2
        }

        return level
    }


    const onPressedHandler = () => {
        const current_level = parseInt(childValue)
        
        if (current_level > CAP_LEVEL) {
            Alert.alert("Error", "Level tidak boleh lebih dari 270")
        } else if (current_level < 0) {
            Alert.alert("Error", `Level mulai dari 1 mas ^-^ bukan ${current_level}`)
        }

        setValue(calculate(current_level).toString())
    }


    return (
        <SafeAreaView>
            <StyledComponent className="px-4 box-border h-full border-none justify-center" component={View}>
                <InputField className="my-4" label="Your Level">
                    <InputControlled type="numeric" setter={setChildValue}/>
                </InputField>

                <InputField className="my-4" label="SP Gained">
                    <InputControlled value={value} readonly={true} />
                </InputField>
                <Button onClick={onPressedHandler} text="Find" />
            </StyledComponent>
        </SafeAreaView>
    )
}