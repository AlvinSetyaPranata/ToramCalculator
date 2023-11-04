import { Text, View } from "react-native"
import { StyledComponent } from "nativewind"
import InputFieldPropsType from "../../types/components/Molecules/InputField"
import { PropsWithChildren } from "react"


export default function InputField(props: PropsWithChildren<InputFieldPropsType>) {
    const className = `w-full border-gray-30 my-4`

    return (
        <StyledComponent className={className} component={View}>
            <Text>{props.label}</Text>
            {props.children}
        </StyledComponent>
    )
} 