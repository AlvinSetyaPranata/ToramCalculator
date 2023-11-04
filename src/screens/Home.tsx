import { StyledComponent } from "nativewind";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputControlled, Button } from "../components/Atoms";
import InputField from "../components/Molecules/InputField";

export default function Home() {
    const onChange = (newValue: string) => {
        Alert.alert("Information", newValue)
    }


    return (
        <SafeAreaView>
            <StyledComponent className="px-4 box-border h-full border-none justify-center" component={View}>
                <InputField className="my-4" label="Your Level">
                    <InputControlled type="numeric" onChangeValue={onChange}/>
                </InputField>
                <InputField className="my-4" label="SP Gained">
                    <InputControlled readonly={true} />
                </InputField>
                <Button text="Find" />
            </StyledComponent>
        </SafeAreaView>
    )
}