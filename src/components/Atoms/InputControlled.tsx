import { StyledComponent } from "nativewind";
import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import InputPropsType from "../../types/components/Atoms/InputControlled";
import { forwardRef, useState } from "react";


// const InputControlled = forwardRef<TextInput, InputPropsType>((props, ref) =>  {
    
//     return (
//         <View>
//             <TextInput keyboardType={props.type} editable={!props.readonly} ref={ref}/>
//         </View>
//     )
// })

// export default InputControlled


export default function InputControlled(props: InputPropsType): JSX.Element {

    return (
        <View>
            <StyledComponent className="rounded-md border-2 border-gray-300" value={props.value} onChangeText={props.setter} keyboardType={props.type} editable={!props.readonly} component={TextInput} />
            {/* <TextInput value={value} onChangeText={onChangeHandler} keyboardType={props.type} editable={!props.readonly} /> */}
        </View>
    )
}

