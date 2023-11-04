import { StyledComponent } from "nativewind";
import { View, TextInput } from "react-native";
import InputPropsType from "../../types/components/Atoms/InputControlled";
import { forwardRef } from "react";


const Input = forwardRef<TextInput, InputPropsType>((props, ref) =>  {
    return (
        <View>
            <TextInput editable={!props.readonly} ref={ref} />
        </View>
    )
})

export default Input