import { StyledComponent } from "nativewind";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/Molecules/InputField";
import { Button, InputControlled } from "../components/Atoms";
import { useState } from "react";
import { getLastDivisibleNumber } from "../utils/calculation";


export default function SkillPoint() {
    const [childValue, setChildValue] = useState<string>("")
    const [value, setValue] = useState<string>("")

    const CAP_LEVEL = 270


    const calculate = (level: number): number => {
        let point = 0;
        const lastDivisibleNumber = getLastDivisibleNumber(level, 5) / 5 - 1

        point = (level * 1 + 1) + lastDivisibleNumber
       
        
        return point
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

                <InputField className="my-4" label="Skill Point Gained">
                    <InputControlled value={value} readonly={true} />
                </InputField>
                <Button onClick={onPressedHandler} text="Find" />
            </StyledComponent>
        </SafeAreaView>
    )
}

{/* <StyledComponent component={Text} className="text-white">Hello worlds</StyledComponent> */}