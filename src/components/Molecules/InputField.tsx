import { Text, View } from "react-native"
import { StyledComponent } from "nativewind"
import InputFieldPropsType from "../../types/components/Molecules/InputField"
import { PropsWithChildren } from "react"


export default function InputField(props: PropsWithChildren<InputFieldPropsType>) {
    const className = `w-full rounded-md border-2 border-gray-300 ${props.className}`

    return (
        <StyledComponent className={className} component={View}>
            <Text>{props.label}</Text>
            {props.children}
        </StyledComponent>
    )
} 