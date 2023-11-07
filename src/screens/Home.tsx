import { StyledComponent } from "nativewind";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputControlled, Button } from "../components/Atoms";
import InputField from "../components/Molecules/InputField";
import { useState } from "react";
import { getDivisibleNumberLength } from "../utils/calculation";


export default function Home() {
    const [childValue, setChildValue] = useState<string>("")
    const [value, setValue] = useState<string>("")

    const CAP_LEVEL = 270


    const calculate = (level: number): number => {
        let total = 0
        const additionalPoint = (5 * getDivisibleNumberLength(1, level, 5)) - (5 * getDivisibleNumberLength(1, level, 10))

        total = level * 2

        return total + additionalPoint
    }


    const onPressedHandler = () => {
        const current_level = parseInt(childValue)
        
        if (current_level > CAP_LEVEL) {
            Alert.alert("Error", "Level tidak boleh lebih dari 270")
        } else if (current_level < 0) {
            Alert.alert("Error", `Level mulai dari 1 mas ^-^ bukan ${current_level}`)
        }

        if (!current_level) {
            setValue("")
            return
        }

        setValue(calculate(current_level).toString())
    }


    return (
        <SafeAreaView>
            <StyledComponent className="px-4 box-border h-full border-none justify-center" component={View}>
                <InputField className="my-4" label="Your Level">
                    <InputControlled type="numeric" setter={setChildValue}/>
                </InputField>

                <InputField className="my-4" label="Stat Point Gained">
                    <InputControlled value={value} readonly={true} />
                </InputField>
                <Button onClick={onPressedHandler} text="Find" />
            </StyledComponent>
        </SafeAreaView>
    )
}